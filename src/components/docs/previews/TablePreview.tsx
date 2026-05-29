"use client";
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "anexui";

const ROWS = [
  { name: "Alice Chen", role: "Designer", status: "Active" },
  { name: "Bob Martinez", role: "Engineer", status: "Active" },
  { name: "Carol White", role: "Manager", status: "Away" },
];

export default function TablePreview() {
  return (
    <div className="w-full overflow-x-auto">
      <Table caption="Team members">
        <TableHead>
          <TableRow>
            <TableHeader scope="col">Name</TableHeader>
            <TableHeader scope="col">Role</TableHeader>
            <TableHeader scope="col">Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.map((r) => (
            <TableRow key={r.name}>
              <TableCell>{r.name}</TableCell>
              <TableCell>{r.role}</TableCell>
              <TableCell>{r.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
