import Nullstack, { NullstackClientContext } from 'nullstack';

import {
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  DatePicker,
  Input,
  Modal,
  Panel,
  Preview,
  Radio,
  Select,
  Table,
  Textarea,
  Toggle,
} from './components';
import Container from './layouts/Container';

import './styles.css';

class Application extends Nullstack {
  modalVisible = false;
  user = {
    email: '',
    about: 'Something about me...',
    active: false,
    country: 'BR',
    date: '2023-09-07',
    dateRange: '2023-09-07 to 2023-09-09',
    weight: 80,
  };

  prepare({ page }: NullstackClientContext) {
    if (page) {
      page.locale = 'en-US';
      page.title = 'NullStack Tailwind';
    }
  }

  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
          <link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/airbnb.css" />
        </head>
        <Container>
          <div class="max-w-6xl mx-auto grid gap-12">
            <Panel id="elements" title="Elements">
              <div class="grid gap-8">
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Button</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    A button is an interface element that makes it possible to perform an action. It must clearly and
                    objectively represent the effect of the action when clicked. Do not use buttons to navigate between
                    pages, for that use Links.
                  </p>
                  <Preview>
                    <Button>Example</Button>
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Button Group</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Buttons can be compactly grouped, reducing the space between them, thus forming a single block.
                  </p>
                  <Preview>
                    <ButtonGroup>
                      <Button class="rounded-r-none">Years</Button>
                      <Button class="rounded-none">Months</Button>
                      <Button class="rounded-l-none">Days</Button>
                    </ButtonGroup>
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Avatar</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Avatars can identify people, companies or products, and must show a photo or image to facilitate
                    recognition and enhance the experience.
                  </p>
                  <Preview>
                    <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                      <Avatar placeholder="AE" class="h-10 w-10" />
                      <Avatar
                        src="https://avatars.githubusercontent.com/u/4829072?v=4"
                        alt="Avatar"
                        class="border border-slate-600 h-10 w-10"
                      />
                      <a href="#" class="flex-shrink-0 group block">
                        <div class="flex items-center">
                          <div>
                            <Avatar
                              src="https://avatars.githubusercontent.com/u/4829072?v=4"
                              alt="Avatar"
                              class="h-10 w-10"
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Fabio Coelho</p>
                            <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Badge</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Badges should indicate amounts or changes in the amount of a given piece of information. They do not
                    appear isolated and, therefore, need to be linked to the main information to which they refer.
                  </p>
                  <Preview>
                    <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                      <Badge class="bg-blue-100 text-blue-800">Example</Badge>
                      <Badge class="bg-green-100 text-green-800">Example</Badge>
                      <Badge class="bg-yellow-100 text-yellow-800">Example</Badge>
                      <Badge class="bg-red-100 text-red-800">Example</Badge>
                    </div>
                  </Preview>
                </div>
              </div>
            </Panel>
            <Panel id="forms" title="Forms">
              <div class="grid gap-8">
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Toggle</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Allows you to switch between two possible states. Typically, the Toggle is used to “turn on/off” or
                    “turn on/off” something on the product. Your actions have immediate effect on the product.
                  </p>
                  <Preview>
                    <Toggle bind={this.user.active} />
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Radio</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    The Radio component lets you select just one option from a list of a few options. Radio buttons must
                    always have one option selected and it is recommended to group a maximum of 7 options, more than
                    that use the Select component.
                  </p>
                  <Preview>
                    <Radio label="Email" helper="4 GB RAM / 2 CPUS / 80 GB SSD Storage" bind={this.user.active} />
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Input</h3>
                  <p class="mb-3 text-gray-400 text-sm">Input allows the insertion of information into the system.</p>
                  <Preview>
                    <Input
                      label="Email"
                      type="email"
                      bind={this.user.email}
                      error="Invalid email"
                      placeholder="foo@bar.com"
                      helper="Example description"
                      corner="Optional"
                    />
                  </Preview>
                  <Preview>
                    <Input
                      label="Weight"
                      type="number"
                      bind={this.user.weight}
                      placeholder="70"
                      helper="Example description"
                      corner="Optional"
                      step="0.1"
                    />
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Textarea</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Textarea can contain more than one line to accommodate longer information or longer descriptions. It
                    behaves the same as the Input fields, however, the TextArea allows the person to change their height
                    as desired.
                  </p>
                  <Preview>
                    <Textarea label="About" bind={this.user.about} helper="Example description" />
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Select</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Select allows you to select one or more items from a pre-defined list of options. They have two
                    basic structures: the trigger and the dropdown selection menu. The trigger is the Select itself
                    which, when clicked, can display a list of options within a dropdown.
                  </p>
                  <Preview>
                    <Select label="Location" bind={this.user.country} helper="Example description" disabled={false}>
                      <option value="US">United States</option>
                      <option value="BR">Brazil</option>
                    </Select>
                  </Preview>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Checkbox</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Checkbox allows selection of items from a picklist. In addition to collecting information,
                    Checkboxes allow the selection of interface elements for contextual manipulation, such as selecting
                    multiple items from a table for editing or deleting.
                  </p>
                  <Preview>
                    <Checkbox
                      label="Comments"
                      description="Get notified when someones posts a comment on a posting."
                      bind={this.user.active}
                    />
                  </Preview>
                </div>
                <div class="mt-5">
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">DatePicker</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    By clicking on the DatePicker a calendar will be displayed, thus allowing a date to be selected. To
                    select a specific period use the DateRangePicker component.
                  </p>
                  <Preview>
                    <DatePicker label="Date" helper="Normal date field" bind={this.user.date} />
                  </Preview>
                  <Preview>
                    <DatePicker
                      label="Range Date"
                      helper="Range date field"
                      config={{ mode: 'range' }}
                      bind={this.user.dateRange}
                    />
                  </Preview>
                  <hr class="mt-5 mb-4" />
                  <h4 class="font-semibold text-gray-600 mb-2">Setup</h4>
                  <p class="text-sm text-gray-500 mb-0">Include the css styles as follows:</p>
                  <div class="prose my-3">
                    <pre class="mt-2">
                      <code>
                        {`<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://npmcdn.com/flatpickr/dist/themes/airbnb.css"
  />
</head>`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </Panel>
            <Panel id="lists" title="Lists">
              <div class="grid gap-8">
                <div>
                  <h3 class="text-lg font-semibold text-gray-600 mb-2">Table</h3>
                  <p class="mb-3 text-gray-400 text-sm">
                    Tables serve to distribute information in rows and columns, facilitating the visualization and
                    understanding of data and its correlations.
                  </p>
                  <Preview>
                    <Table>
                      <Table.THead>
                        <Table.TR>
                          <Table.TH>Name</Table.TH>
                          <Table.TH>Title</Table.TH>
                          <Table.TH>Email</Table.TH>
                          <Table.TH>Role</Table.TH>
                          <Table.TH>Actions</Table.TH>
                        </Table.TR>
                      </Table.THead>
                      <Table.TBody>
                        <Table.TR>
                          <Table.TD class="font-medium text-gray-900">Fabio Coelho</Table.TD>
                          <Table.TD>Software Engineer</Table.TD>
                          <Table.TD>fabio@ae.studio</Table.TD>
                          <Table.TD>Member</Table.TD>
                          <Table.TD>
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Table.TD>
                        </Table.TR>
                        <Table.TR>
                          <Table.TD class="font-medium text-gray-900">Fabio Coelho</Table.TD>
                          <Table.TD>Software Engineer</Table.TD>
                          <Table.TD>fabio@ae.studio</Table.TD>
                          <Table.TD>Member</Table.TD>
                          <Table.TD>
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Table.TD>
                        </Table.TR>
                        <Table.TR>
                          <Table.TD class="font-medium text-gray-900">Fabio Coelho</Table.TD>
                          <Table.TD>Software Engineer</Table.TD>
                          <Table.TD>fabio@ae.studio</Table.TD>
                          <Table.TD>Member</Table.TD>
                          <Table.TD>
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Table.TD>
                        </Table.TR>
                      </Table.TBody>
                    </Table>
                  </Preview>
                </div>
              </div>
            </Panel>
            <Panel id="feedbacks" title="Feedbacks">
              <h3 class="text-lg font-semibold text-gray-600 mb-2">Alert</h3>
              <p class="mb-3 text-gray-400 text-sm">
                These are system-generated notifications with a high degree of criticality. They should be used when the
                system is unstable or there is a risk of loss of data or access to resources.
              </p>
              <Preview>
                <Alert class="flex-1 md:flex md:justify-between">
                  <p class="text-sm text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                  </p>
                  <p class="mt-3 text-sm md:mt-0 md:ml-6">
                    <a href="#" class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                      Details <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </Alert>
              </Preview>
              <Preview>
                <Alert variant="success">
                  <h3 class="text-sm font-medium text-green-800">Success</h3>
                  <div class="text-sm text-green-700">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                    </p>
                  </div>
                </Alert>
              </Preview>
              <Preview>
                <Alert variant="warning">
                  <h3 class="text-sm font-medium text-yellow-800">Warning</h3>
                  <div class="text-sm text-yellow-700">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                    </p>
                  </div>
                </Alert>
              </Preview>
              <Preview>
                <Alert variant="danger">
                  <h3 class="text-sm font-medium text-red-800">Danger</h3>
                  <div class="text-sm text-red-700">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                    </p>
                  </div>
                </Alert>
              </Preview>
            </Panel>
            <Panel id="overlays" title="Overlays">
              <div>
                <h3 class="text-lg font-semibold text-gray-600 mb-2">Modal</h3>
                <p class="mb-3 text-gray-400 text-sm">
                  Modal is used to interrupt the workflow but does not require any action from the person, it is just a
                  "container" where other components can be applied and styled according to the needs of the solution.
                  If it is necessary for the person to perform some action then use the Dialog.
                </p>
                <Preview>
                  <Button onclick={() => (this.modalVisible = true)}>Show Modal</Button>
                </Preview>
                <Modal visible={this.modalVisible}>
                  <Modal.Close onclick={() => (this.modalVisible = false)} />
                  <Modal.Body>
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg
                        class="h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                      <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Payment successful
                      </h3>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onclick={() => (this.modalVisible = false)}>Go back to dashboard</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Panel>
          </div>
        </Container>
      </>
    );
  }
}

export default Application;
