const Icon = () => (
  <svg
    class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

export default function Container(props) {
  return (
    <div class="md:flex bg-gray-50">
      <div class="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
          <div class="flex justify-center flex-shrink-0 px-4">
            <img
              class="h-8"
              src="https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png"
              alt="NullStack Tailwind"
            />
          </div>
          <div class="mt-5 flex-grow flex flex-col">
            <nav class="flex-1 px-2 pb-4 space-y-1">
              <a
                href="https://github.com/fccoelho7/nullstack-tailwind"
                class="text-gray-800 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                target="_blank"
              >
                <Icon />
                GitHub
              </a>
              <a
                href="https://fccoelho7.github.io/nullstack-tailwind/"
                class="text-gray-800 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <Icon />
                Docs
              </a>
              <a
                href="#elements"
                class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <Icon />
                Elements
              </a>
              <a
                href="#forms"
                class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <Icon />
                Forms
              </a>
              <a
                href="#lists"
                class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <Icon />
                Lists
              </a>
              <a
                href="#feedbacks"
                class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <Icon />
                Feedbacks
              </a>
              <a
                href="#overlays"
                class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <Icon />
                Overlays
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div class="md:pl-64 flex flex-col flex-1">
        <main class="flex-1">
          <div class="py-6">
            <main>{props.children}</main>
          </div>
        </main>
      </div>
    </div>
  );
}
