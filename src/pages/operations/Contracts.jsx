import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocImage from "../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "creating-contracts", label: "Creating Contracts" },
  { id: "contract-details", label: "Contract Details" },
  { id: "survey-assignment", label: "Assigning Surveys" },
  { id: "status-management", label: "Progress & Status" },
  { id: "permissions", label: "Who Can Access This" },
];

export default function Contracts() {
  return (
    <DocPage
      path="/operations/contracts"
      eyebrow="Operations"
      title="Contract Management"
      description="Learn how to create shipping contracts, assign surveyors, track work progress, and manage customer reports."
      toc={toc}
      hideImage={true}
    >
      {/* ── SECTION 1: OVERVIEW ────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p>
          A <strong>Contract</strong> is the main container for cargo inspection work in CargoClave. It links a customer's shipment request with the inspection plan that field surveyors will complete at the port berth.
        </p>
        <p className="mt-3">
          Contracts hold all basic shipment information (Bill of Lading numbers, vessel names, cargo weight), attach standardized survey checklists, assign field surveyors or teams, set completion deadlines, and generate final customer reports.
        </p>

        {/* IMAGE 1: Contract Management Workspace Overview */}
        <DocImage
          path="/operations/contracts"
          imageKey="overview"
          hideCaption={true}
        />

        <div className="my-5 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Inspection Container</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Holds all field checklists, terminal check-ins, and inspection steps for a job.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Deadline Tracking</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Monitors target completion dates per survey step to prevent operational delays.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Report Source</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Feeds verified survey responses into the Report Builder to create customer reports.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 2: CREATING CONTRACTS ──────────────────────────────── */}
      <Section id="creating-contracts" title="Creating Contracts">
        <p>
          To start a new inspection job, open the <strong>Create Contract Console</strong>. This simple form captures customer details, checklist templates, shipment information, and surveyor assignments.
        </p>

        {/* IMAGE 2: Commercial Details & Inspection Template Selection */}
        <DocImage
          path="/operations/contracts"
          imageKey="creation-commercial"
          hideCaption={true}
        />

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          1. Select Inspection Template &amp; Commercial Info
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <p className="text-ink-700 dark:text-slate-300">
            Select a pre-built template to auto-fill checklist fields and report formats for your shipment type.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-700 dark:text-slate-300">
            <li><strong>Shipment Type (Filter):</strong> Filter template options by direction (<em>Export</em> or <em>Import</em>).</li>
            <li><strong>Cargo Type (Filter):</strong> Filter by cargo classification (<em>Container</em>, <em>Break-Bulk</em>, <em>Bulk</em>).</li>
            <li><strong>Template Dropdown:</strong> Select a pre-configured template, or choose <code>CUSTOM</code> to build a blank setup.</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Contract ID</strong>
              <span className="text-ink-650 dark:text-slate-400 leading-relaxed block">Auto-generated or custom unique reference code (e.g., <code className="text-[11px] inline-block px-1.5 py-0.5 rounded bg-ink-900/5 dark:bg-cyan-500/10 text-signal-700 dark:text-cyan-400 border border-ink-900/10 dark:border-cyan-500/20 font-mono align-baseline">TCIS/IN/2026-PROD-0013</code>).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Contracting Party <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select the customer or client organization requesting the survey.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Primary Contact <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select the main client contact person who will receive status updates.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Insurance / P&amp;I Ref</strong>
              <span className="text-ink-650 dark:text-slate-400">Optional P&amp;I insurance club reference number.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Start Date <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select the planned start date for the inspection.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Completion Deadline <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select the required deadline for completing the survey.</span>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
            <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Inspection Location</strong>
            <span className="text-ink-650 dark:text-slate-400">Search and select the port terminal, warehouse, or berth facility.</span>
          </div>
        </div>

        {/* IMAGE 3: Shipment Details & Vessel Data */}
        <DocImage
          path="/operations/contracts"
          imageKey="creation-shipment"
          hideCaption={true}
        />

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          2. Shipment &amp; Vessel Details
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Shipment Type <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select Export or Import.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Cargo Type <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Select cargo type (Container, Break-Bulk, or Bulk).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Port of Loading</strong>
              <span className="text-ink-650 dark:text-slate-400">Select departure port from master data.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Port of Discharge</strong>
              <span className="text-ink-650 dark:text-slate-400">Select destination port from master data.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Packaging Type</strong>
              <span className="text-ink-650 dark:text-slate-400">Select packaging (Drums, Pallets, Containers, ISO Tanks).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Quantity</strong>
              <span className="text-ink-650 dark:text-slate-400">Enter total package count.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Stage Order <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Choose <em>Sequential</em> (one after another) or <em>Parallel</em> (any order).</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Vessel Name</strong>
              <span className="text-ink-650 dark:text-slate-400">Select vessel name from master data.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Voyage Number</strong>
              <span className="text-ink-650 dark:text-slate-400">Enter carrier voyage number.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01]">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">Berth No. (If Available)</strong>
              <span className="text-ink-650 dark:text-slate-400">Specific terminal quay or berth docking number.</span>
            </div>
            <div className="p-3 rounded-lg border border-ink-900/5 dark:border-white/5 bg-ink-900/[0.01] dark:bg-white/[0.01] md:col-span-2">
              <strong className="text-ink-900 dark:text-slate-100 block mb-0.5">BL Number <span className="text-red-500">*</span></strong>
              <span className="text-ink-650 dark:text-slate-400">Required Bill of Lading tracking number.</span>
            </div>
          </div>
        </div>

        {/* IMAGE 4: Execution Plan Grid & Surveyor Assignment */}
        <DocImage
          path="/operations/contracts"
          imageKey="creation-execution"
          hideCaption={true}
        />

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          3. Inspection Steps &amp; Surveyor Assignment Grid
        </h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-3 text-xs mb-6">
          <p className="text-ink-700 dark:text-slate-300">
            Use this table to pair specific survey checklists with terminal locations, inspection dates, and field surveyors.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-ink-900/10 dark:border-white/10">
              <thead className="bg-ink-900/5 dark:bg-white/5 font-semibold text-ink-900 dark:text-slate-100">
                <tr>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">#</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Checklist *</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Assign Mode</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Assignee</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Location *</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Date *</th>
                  <th className="p-2 border-b border-ink-900/10 dark:border-white/10">Contact Person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/5 dark:divide-white/5 text-ink-700 dark:text-slate-300">
                <tr>
                  <td className="p-2 font-mono text-center">1</td>
                  <td className="p-2">Select survey checklist from dropdown</td>
                  <td className="p-2">Choose <code>Individual</code> or <code>Team</code> mode</td>
                  <td className="p-2">Select surveyor user or field team</td>
                  <td className="p-2">Search &amp; select terminal location</td>
                  <td className="p-2 font-mono">dd-mm-yyyy datepicker</td>
                  <td className="p-2">Select Point of Contact for berth coordination</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-ink-650 dark:text-slate-400">
            Click <code>+ Add Row</code> to add multiple survey stages to a single dispatch contract.
          </p>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100 mt-6 mb-3">
          4. Save &amp; Activation Controls
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <strong className="text-ink-900 dark:text-slate-100 block mb-1">Cancel Button</strong>
            <span className="text-ink-650 dark:text-slate-400">Cancels setup and returns to Contract Management.</span>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <strong className="text-ink-900 dark:text-slate-100 block mb-1 flex items-center justify-between">
              <span>Save as Draft</span>
              <kbd className="px-1.5 py-0.5 rounded bg-ink-900/10 dark:bg-white/10 font-mono text-[10px]">Ctrl + Shift + S</kbd>
            </strong>
            <span className="text-ink-650 dark:text-slate-400">Saves an incomplete setup as a draft without sending dispatches to surveyors.</span>
          </div>
          <div className="p-3.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:border-emerald-500 hover:bg-emerald-500/20 hover:text-emerald-800 dark:hover:text-emerald-200 transition-all duration-150 cursor-pointer">
            <strong className="block mb-1 flex items-center justify-between">
              <span>Activate Contract</span>
              <kbd className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 font-mono text-[10px]">Ctrl + Enter</kbd>
            </strong>
            <span className="text-xs text-emerald-800/90 dark:text-emerald-300/90">Activates the contract and sends mobile checklists to assigned surveyors.</span>
          </div>
        </div>
      </Section>

      {/* ── SECTION 3: CONTRACT DETAILS ────────────────────────────────── */}
      <Section id="contract-details" title="Contract Details">
        <p>
          The <strong>Contract Details Screen</strong> gives you a complete summary of a single job, showing inspection progress, vessel details, container lists, and uploaded documents.
        </p>

        {/* IMAGE 5: Contract Details View Screen */}
        <DocImage
          path="/operations/contracts"
          imageKey="contract-details"
          hideCaption={true}
        />

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Key Screen Panels</h4>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Header Summary Bar</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Displays Contract ID (e.g., <code>CNT-2026-0892</code>), current status badge, customer name, BL number, and vessel call sign.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Progress Tracker</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Shows progress bars for completed, in-progress, and pending survey steps.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Container &amp; Cargo List</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-0.5">Displays container numbers, seal numbers, damage flags, and tally counts.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: SURVEY ASSIGNMENT ───────────────────────────────── */}
      <Section id="survey-assignment" title="Assigning Surveys">
        <p>
          Coordinators schedule work by assigning specific field surveyors or teams to each step in the inspection plan.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200 mt-4 mb-2">Assignment Modes</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Individual Surveyor Assignment:</strong> Assigns a single surveyor. The job appears on their mobile app home screen.</li>
          <li><strong>Team Assignment:</strong> Assigns an operational team (e.g., <em>Berth 4 Shift A Team</em>). Any surveyor in that team can pick up and execute the checklist.</li>
          <li><strong>Completion Deadline:</strong> Sets target date and time. Approaching deadlines trigger warning flags on the <Link to="/operations/dashboard">Operations Overview</Link>.</li>
        </ul>
      </Section>

      {/* ── SECTION 5: STATUS MANAGEMENT ───────────────────────────────── */}
      <Section id="status-management" title="Progress &amp; Status">
        <p>
          Contracts move through three simple progress stages:
        </p>

        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/5 dark:bg-white/5">
            <span className="px-2 py-0.5 rounded bg-ink-900/10 dark:bg-white/15 text-ink-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider">Draft</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Setup state. Coordinators can pause and resume editing. Mobile sync is disabled.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-950/10">
            <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-700 dark:text-green-300 font-bold text-xs uppercase tracking-wider">Active</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Dispatched state. Checklists are sent to surveyors' mobile devices for execution.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-blue-200 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-950/10">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold text-xs uppercase tracking-wider">Completed</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Finished state. Automatically set when all survey steps are reviewed and approved. Customer reports are published.</p>
          </div>
        </div>

        <Callout type="important">
          Marking a contract as Completed locks all survey entries and report layouts. No further surveyor edits or photo additions can be made.
        </Callout>
      </Section>

      {/* ── SECTION 6: PERMISSIONS ──────────────────────────────────────── */}
      <Section id="permissions" title="Who Can Access This">
        <p>
          Contract management actions are controlled by user role permissions:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-white/10">
            <thead className="bg-ink-900/5 dark:bg-white/5 font-semibold text-ink-900 dark:text-slate-100">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Action / Feature</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Administrator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Operations Head</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Surveyor</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-white/10">Custom Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-white/5 text-ink-700 dark:text-slate-300">
              <tr>
                <td className="p-2.5 font-medium">Create / Draft Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Activate Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Fill Checklist (Mobile)</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Approve Inspection</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Cancel Contract</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-green-600 dark:text-green-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
