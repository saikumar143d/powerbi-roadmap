import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Essential Skills for a Career in Data Analytics",
    items: [
      {
        title: "Excel",
        details: [
          "Master core formulas: SUM, IF, VLOOKUP, INDEX/MATCH",
          "Use Pivot Tables for summarizing data",
          "Create charts and dashboards",
          "Data cleaning: Remove duplicates, text functions, filters"
        ]
      },
      {
        title: "SQL",
        details: [
          "Write SELECT queries to retrieve data",
          "Filter data with WHERE, AND/OR",
          "Use JOINs to combine tables",
          "Aggregate data using GROUP BY and HAVING"
        ]
      },
      {
        title: "Power BI / Tableau",
        details: [
          "Connect to different data sources",
          "Create interactive dashboards",
          "Use slicers, filters, and drill-throughs",
          "Design data models and calculated measures"
        ]
      },
      {
        title: "Statistics",
        details: [
          "Understand mean, median, mode, range",
          "Learn standard deviation and variance",
          "Study probability and normal distribution",
          "Know when to apply correlation and regression"
        ]
      },
      {
        title: "Data Cleaning",
        details: [
          "Handle missing and duplicate data",
          "Use tools like Power Query and Python",
          "Standardize data formats and text",
          "Detect and treat outliers"
        ]
      },
      {
        title: "Programming (Python / R)",
        details: [
          "Use Python libraries: Pandas, NumPy, Matplotlib, Seaborn",
          "Perform data cleaning and transformation",
          "Visualize with code-based libraries",
          "Automate reports and data pipelines"
        ]
      },
      {
        title: "Communication",
        details: [
          "Storytelling with charts and visuals",
          "Create presentation-ready reports",
          "Tailor your message to your audience",
          "Use data to support business recommendations"
        ]
      },
      {
        title: "Bonus Skills",
        details: [
          "Git: Version control for collaboration",
          "APIs: Pull data from web services",
          "Cloud Platforms: Use AWS, Azure, or BigQuery",
          "Machine Learning: Basics of regression, classification, and clustering"
        ]
      }
    ]
  },
  {
    title: "Power BI Learning Path",
    items: [
      {
        title: "Introduction to Power BI",
        details: [
          "What is Power BI?",
          "Components: Power BI Desktop, Service, Mobile",
          "Power BI vs Excel"
        ]
      },
      {
        title: "Installation & Setup",
        details: [
          "Download and Install Power BI Desktop",
          "Power BI Interface Overview"
        ]
      },
      {
        title: "Data Loading & Transformation",
        details: [
          "Connect to Excel, CSV, SQL, Web Data",
          "Using Power Query Editor",
          "Remove duplicates, filter rows, merge tables"
        ]
      },
      {
        title: "Data Modeling",
        details: [
          "Relationships between tables",
          "Star Schema vs Snowflake Schema",
          "Calculated Columns and Measures"
        ]
      },
      {
        title: "DAX (Data Analysis Expressions)",
        details: [
          "Basic DAX functions: SUM, COUNT, AVERAGE",
          "Time Intelligence: YTD, QTD, MTD",
          "CALCULATE, FILTER, RELATED"
        ]
      },
      {
        title: "Data Visualization",
        details: [
          "Bar, Line, Pie, Map charts",
          "Matrix, Table, Slicer, Card visuals",
          "Custom visuals from marketplace"
        ]
      },
      {
        title: "Report Publishing & Sharing",
        details: [
          "Publish to Power BI Service",
          "Workspaces & Dashboards",
          "Scheduled Refresh and Data Gateways"
        ]
      },
      {
        title: "Advanced Topics",
        details: [
          "Row-Level Security (RLS)",
          "Paginated Reports",
          "Power BI API & Automation"
        ]
      }
    ]
  }
];

export default function PowerBIRoadmapApp() {
  const [open, setOpen] = useState({});

  const toggleSection = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="grid gap-6 p-4">
      {sections.map((section, i) => (
        <Card key={i}>
          <CardContent className="space-y-2">
            <h2 className="text-xl font-bold pt-4">{section.title}</h2>
            {section.items.map((item, j) => {
              const id = `${i}-${j}`;
              const isOpen = open[id];
              return (
                <div key={id}>
                  <button
                    className="flex items-center gap-2 text-left w-full text-base font-medium py-2"
                    onClick={() => toggleSection(id)}
                  >
                    {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    {item.title}
                  </button>
                  {isOpen && (
                    <ul className="list-disc ml-6 text-sm text-muted-foreground">
                      {item.details.map((point, k) => (
                        <li key={k}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}