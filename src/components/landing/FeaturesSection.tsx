import React from "react";
import { ClipboardList, FileCheck, BarChart3, Workflow } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
        <ClipboardList className="h-12 w-12 text-emerald-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
        <p className="text-gray-400">
          Streamline document management and ensure compliance with automated
          tracking and updates.
        </p>
      </div>
      <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
        <FileCheck className="h-12 w-12 text-emerald-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
        <p className="text-gray-400">
          Digitize and automate contract management with intelligent
          workflows and approvals.
        </p>
      </div>
      <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
        <BarChart3 className="h-12 w-12 text-emerald-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Financial Insights</h3>
        <p className="text-gray-400">
          Gain real-time visibility into operations and financial
          performance with advanced analytics.
        </p>
      </div>
      <div className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
        <Workflow className="h-12 w-12 text-emerald-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
        <p className="text-gray-400">
          Optimize operations with automated workflows that reduce manual
          tasks and improve efficiency.
        </p>
      </div>
    </div>
  );
};