import { render } from "@testing-library/react"
import Pagination from "../components/Pagination"

describe("pagination tests", () => {
    test("it should render buttons", () => {
        render(<Pagination />)
    })

    test("should click button", () => {
        render(<Pagination current={1} total={10} />)
    })
})