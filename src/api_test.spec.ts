/**
 * web-api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("CharityApi", () => {
  let instance: api.CharityApi
  beforeEach(function() {
    instance = new api.CharityApi(config)
  });

  test("listCharityOptions", () => {
    const init: Array<Cuid> = undefined
    const page: Page = undefined
    const pageSize: PageSize = undefined
    const search: string = "search_example"
    return expect(instance.listCharityOptions(init, page, pageSize, search, {})).resolves.toBe(null)
  })
})

describe("OrganizationApi", () => {
  let instance: api.OrganizationApi
  beforeEach(function() {
    instance = new api.OrganizationApi(config)
  });

  test("listOrganizationOptions", () => {
    const init: Array<Cuid> = undefined
    const page: Page = undefined
    const pageSize: PageSize = undefined
    const search: string = "search_example"
    return expect(instance.listOrganizationOptions(init, page, pageSize, search, {})).resolves.toBe(null)
  })
})

describe("SelectorApi", () => {
  let instance: api.SelectorApi
  beforeEach(function() {
    instance = new api.SelectorApi(config)
  });

  test("listCharityOptions", () => {
    const init: Array<Cuid> = undefined
    const page: Page = undefined
    const pageSize: PageSize = undefined
    const search: string = "search_example"
    return expect(instance.listCharityOptions(init, page, pageSize, search, {})).resolves.toBe(null)
  })
  test("listOrganizationOptions", () => {
    const init: Array<Cuid> = undefined
    const page: Page = undefined
    const pageSize: PageSize = undefined
    const search: string = "search_example"
    return expect(instance.listOrganizationOptions(init, page, pageSize, search, {})).resolves.toBe(null)
  })
})

