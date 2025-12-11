import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {


    function signout(){
        localStorage.removeItem("auth");
    }

  return (
    <>

          <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
              </svg>
          </button>

          <aside id="default-sidebar" class="fixed bg-white top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
              <div class="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
                  <ul class="space-y-2 font-medium">
                      <li>
                          <NavLink
                              to="/contact"
                              className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                          >
                              <svg
                                  className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                              >
                                  <path
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 2a6 6 0 0 0-6 6c0 4.5 6 12 6 12s6-7.5 6-12a6 6 0 0 0-6-6z"
                                  />
                                  <circle
                                      cx="12"
                                      cy="8"
                                      r="2.5"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      fill="none"
                                  />
                              </svg>



                              <span className="ms-3">Contact</span>
                          </NavLink>
                      </li>


                      <li>
                          <NavLink
                              to="/statistic"
                              className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                          >
                              <svg
                                  className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                              >
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                              </svg>

                              <span className="ms-3">Statistic</span>
                          </NavLink>
                      </li>


                      <li>
                          <NavLink
                          onClick={signout}
                              to="/"
                              className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
                          >
                              <svg
                                  className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                                  />
                              </svg>

                              <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                          </NavLink>
                      </li>


                  </ul>
              </div>
          </aside>

          

    </>
  )
}

export default Sidebar