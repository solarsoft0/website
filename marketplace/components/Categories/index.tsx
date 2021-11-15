import { Fragment, useCallback, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useCategories, TCategory } from "~/hooks/categories";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Categories = ({ onChange }: { onChange?: (category: TCategory) => void }) => {
  const { categories, more, defaultCategory, getById } = useCategories()
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    onChange && onChange(category)
  }, [])

  const handle = useCallback((category: TCategory) => {
    setCategory(category)

    onChange && onChange(category)
  }, [])

  return (
    <div className="mb-8">
      <div className="px-4 sm:px-0">
        <div className="md:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a category
          </label>
          <select
            id="tabs"
            name="tabs"
            onChange={({ target: { value } }) => {
              const cat = getById(value)

              if (cat) handle(cat)
            }}
            value={category?.id}
            className="mt-4 block dark:text-white dark:bg-transparent w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
          >
            {categories.map(({ name, id }) => (
              <option key={id} value={id}>{name}</option>
            ))}
            {more.map(({ name, id }) => (
              <option key={id} value={id}>{name}</option>
            ))}
          </select>
        </div>

        <div className="hidden md:block">
          <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
            {categories.map(({ id, name, count, ...cat }) => (
              <button
                key={name}
                className={classNames(
                  id === category?.id
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-200",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                )}
                onClick={() => handle({ ...cat, id, name, count })}
              >
                {name}
                {count ? (
                  <span
                    className={classNames(
                      id === category?.id
                        ? "bg-gray-100 text-primary"
                        : "bg-gray-100 text-gray-900",
                      "hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                    )}
                  >
                    {count}
                  </span>
                ) : null}
              </button>
            ))}

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 hover:border-gray-200",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm group inline-flex items-center"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                          {more.map(item => (
                            <button
                              key={item.name}
                              className={classNames(
                                item.id === category?.id
                                  ? "bg-gray-50 text-primary"
                                  : "text-gray-900 dark:text-gray-300",
                                "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:bg-transparent"
                              )}
                              onClick={() => handle(item)}
                            >
                              <p className="m-0 text-base">
                                {item.name}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Categories;
