/**
 * @name Table
 * @param {?string} id
 * @param {?string} class
 * @param {?Element} children
 * @returns {Element}
 * @example
 * import { Table } from "nullstack-tailwind";
 *
 * <Table>
 *  <Table.THead>
 *      <Table.TR>
 *      <Table.TH>Name</Table.TH>
 *      <Table.TH>Title</Table.TH>
 *      <Table.TH>Email</Table.TH>
 *      <Table.TH>Role</Table.TH>
 *      <Table.TH>Actions</Table.TH>
 *    </Table.TR>
 *  </Table.THead>
 *  <Table.TBody>
 *    <Table.TR>
 *      <Table.TD class="font-medium text-gray-900">
 *        Lindsay Walton
 *      </Table.TD>
 *      <Table.TD>Front-end Developer</Table.TD>
 *      <Table.TD>lindsay.walton@example.com</Table.TD>
 *      <Table.TD>Member</Table.TD>
 *      <Table.TD>
 *        <a href="#" class="text-indigo-600 hover:text-indigo-900">
 *          Edit
 *        </a>
 *      </Table.TD>
 *    </Table.TR>
 *  </Table.TBody>
 * </Table>
 */

import { NullstackNode } from 'nullstack';

interface DefaultProps {
  id?: string;
  class?: string;
  children?: NullstackNode;
}

const Table = ({ id, children, class: klass }: DefaultProps) => (
  <table id={id} class={'min-w-full divide-y divide-gray-300 align-middle'.concat(klass ? ` ${klass}` : '')}>
    {children}
  </table>
);

Table.THead = ({ children, class: klass }: DefaultProps) => (
  <thead class={'bg-gray-50'.concat(klass ? ` ${klass}` : '')}>{children}</thead>
);

Table.TH = ({ children, class: klass }: DefaultProps) => (
  <th scope="col" class={'px-3 py-3.5 text-left text-sm font-semibold text-gray-900'.concat(klass)}>
    {children}
  </th>
);

Table.TBody = ({ children, class: klass }: DefaultProps) => (
  <tbody class={'divide-y divide-gray-200 bg-white'.concat(klass ? ` ${klass}` : '')}>{children}</tbody>
);

Table.TR = ({ children, class: klass }: DefaultProps) => <tr class={klass ? klass : ''}>{children}</tr>;

Table.TD = ({ children, class: klass }: DefaultProps) => (
  <td class={'whitespace-nowrap px-3 py-4 text-sm text-gray-500'.concat(klass ? ` ${klass}` : '')}>{children}</td>
);

export default Table;
