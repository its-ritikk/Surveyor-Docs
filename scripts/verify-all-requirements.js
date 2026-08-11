import dotenv from 'dotenv';
dotenv.config();

const { mediaRegistry } = await import('../src/data/mediaRegistry.js');
import { generatePresignedUploadUrl, getBucketName } from '../server/s3Service.js';
import fs from 'fs';
import path from 'path';

async function runVerification() {
  console.log('==================================================');
  console.log('  AWS S3 AP-SOUTH-1 REGION INTEGRATION TEST SUITE ');
  console.log('==================================================\n');

  // Check 1: Environment Region Config
  console.log('[Check 1]: Verifying .env configuration...');
  console.log(`  - AWS_REGION: ${process.env.AWS_REGION}`);
  console.log(`  - AWS_BUCKET_NAME: ${process.env.AWS_BUCKET_NAME}`);
  const envRegionOk = process.env.AWS_REGION === 'ap-south-1';
  console.log(`  Result: ${envRegionOk ? 'PASS (ap-south-1)' : 'FAIL'}\n`);

  // Check 2: mediaRegistry.js Target Image Reference
  console.log('[Check 2]: Verifying mediaRegistry.js target reference for /reports/report-builder/overview...');
  const targetRoute = '/reports/report-builder/overview';
  const targetEntry = mediaRegistry[targetRoute]?.overview;
  console.log('  - Target Route:', targetRoute);
  console.log('  - Target S3 URL:', targetEntry?.src);

  const isTargetApSouth1 = targetEntry?.src?.includes('cargoclave-docs-media.s3.ap-south-1.amazonaws.com/reports/images/8.6_Report_Builder.png');
  console.log(`  Result: ${isTargetApSouth1 ? 'PASS (URL uses ap-south-1 region)' : 'FAIL'}\n`);

  // Check 3: Presigned URL Generation in ap-south-1
  console.log('[Check 3]: Verifying presigned URL generation and media URL formatting in ap-south-1...');
  const presigned = await generatePresignedUploadUrl({
    section: 'reports',
    mediaType: 'image',
    fileName: '8.6_Report_Builder.png',
    contentType: 'image/png',
    metadata: { module: 'Reports', docPath: targetRoute },
  });

  console.log('  - Generated Presigned Host:', new URL(presigned.presignedUrl).host);
  console.log('  - Generated Public URL:', presigned.publicUrl);

  const isPresignedApSouth1 = presigned.publicUrl.includes('s3.ap-south-1.amazonaws.com');
  console.log(`  Result: ${isPresignedApSouth1 ? 'PASS (Presigned URL uses ap-south-1)' : 'FAIL'}\n`);

  // Check 4: Local Asset Fallback Availability for Browser Loading
  console.log('[Check 4]: Verifying local asset fallback for reports/images/8.6_Report_Builder.png...');
  const localDiskPath = path.join(process.cwd(), 'public', 'docs-media', 'reports', '8.6_Report_Builder.png');
  const localExists = fs.existsSync(localDiskPath);
  console.log('  - Disk Path:', localDiskPath);
  console.log(`  - Local Disk File Exists: ${localExists ? 'YES' : 'NO'}`);
  console.log(`  Result: ${localExists ? 'PASS (Browser asset ready for dev & fallback)' : 'FAIL'}\n`);

  // Check 5: Verify Frontend Code Credential Isolation
  console.log('[Check 5]: Verifying frontend components do not expose AWS credentials...');
  const docImageContent = fs.readFileSync(path.join(process.cwd(), 'src', 'components', 'DocImage.jsx'), 'utf8');
  const hasSecretInDocImage = docImageContent.includes('AWS_SECRET_ACCESS_KEY') || docImageContent.includes('secretAccessKey');
  console.log(`  - DocImage.jsx credentials isolated: ${!hasSecretInDocImage ? 'YES' : 'NO'}`);
  console.log(`  Result: ${!hasSecretInDocImage ? 'PASS (No credentials in frontend)' : 'FAIL'}\n`);

  console.log('==================================================');
  console.log('             FINAL SUITE SUMMARY                  ');
  console.log('==================================================');
  const allPass = envRegionOk && isTargetApSouth1 && isPresignedApSouth1 && localExists && !hasSecretInDocImage;
  console.log(`OVERALL VERIFICATION: ${allPass ? 'SUCCESS (ALL 5 CHECKS PASSED)' : 'FAILURE'}`);
  console.log('==================================================\n');
}

runVerification();
