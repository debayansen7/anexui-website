"use client";
import { Tabs, TabList, Tab, TabPanel } from "anexui";

export default function TabsPreview() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Tabs defaultActiveId="overview" variant="line">
        <TabList>
          <Tab id="overview">Overview</Tab>
          <Tab id="analytics">Analytics</Tab>
          <Tab id="settings">Settings</Tab>
        </TabList>
        <TabPanel id="overview"><p style={{ margin: "var(--space-3) 0 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Overview content</p></TabPanel>
        <TabPanel id="analytics"><p style={{ margin: "var(--space-3) 0 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Analytics content</p></TabPanel>
        <TabPanel id="settings"><p style={{ margin: "var(--space-3) 0 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>Settings content</p></TabPanel>
      </Tabs>
      <Tabs defaultActiveId="all" variant="pill">
        <TabList>
          <Tab id="all">All</Tab>
          <Tab id="active">Active</Tab>
          <Tab id="archived">Archived</Tab>
        </TabList>
        <TabPanel id="all" /><TabPanel id="active" /><TabPanel id="archived" />
      </Tabs>
    </div>
  );
}
