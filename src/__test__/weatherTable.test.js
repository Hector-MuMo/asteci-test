import { render, screen } from "@testing-library/react"
import WeatherTable from "../components/WeatherTable"


describe("pagination tests", () => {
    test("it should render Table", () => {
        render(<WeatherTable />)
    })
})