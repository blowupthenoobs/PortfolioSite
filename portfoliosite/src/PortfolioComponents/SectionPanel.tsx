import PortfolioSideTab from "./PortfolioSideTab"

export default function SectionPanel() {
    return (
        <div className="w-[50px] flex border-b-0 justify-end [writing-mode:vertical-lr] rotate-180"> {/*the w is actually just for the bigger one, the rest margin down to 40*/}
            <PortfolioSideTab Label="Secrets" route="/secrets"/>
            <PortfolioSideTab Label="Portfolio" route="/portfolio"/>
            <PortfolioSideTab Label="Snippets" route="/snippets"/>
            <PortfolioSideTab Label="Blog" route="/blogs"/>
            <PortfolioSideTab Label="MainPage" route="/"/>
        </div>
    )
}