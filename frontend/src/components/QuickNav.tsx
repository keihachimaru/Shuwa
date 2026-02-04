import '@/styles/QuickNav.css';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

type Props = {
    data: string | null;
    sections: string[]
}

const QuickNav = ({ data, sections } : Props) => {
    if(!data) return
    const similar = sections.find(s => s.toLocaleLowerCase()===data?.toLocaleLowerCase())
    const sectionName = similar!.split("[")
    const sectionDetail = sectionName.length>1?sectionName[1].slice(0,-1):""
    const idx = sections.indexOf(similar!);

    function goNext() {
        const similar = sections.find(s => s.toLocaleLowerCase()===data?.toLocaleLowerCase())
        const idx = (sections.indexOf(similar!)+1)%sections.length
        const next = sections[idx]
        const id = next.split(' ').join('-').toLocaleLowerCase();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    function goPrev() {
        const similar = sections.find(s => s.toLocaleLowerCase()===data?.toLocaleLowerCase())
        const idx = (sections.indexOf(similar!)-1)
        const next = sections[idx]
        const id = next.split(' ').join('-').toLocaleLowerCase();
        const element = document.getElementById(id);

        const offset = 20;
        const top = element!.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }

    return sectionName.length && (
        <div className="quickNav">
            <div className="indicator">
                {
                    sections.map(s => (
                        <div 
                            className={s==similar?"chip active": "chip"}
                        >
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <button onClick={() => goPrev()}>
                    <FaCaretLeft 
                        size={32} 
                        color={idx>0?"var(--color-accent)":"transparent"}>
                    </FaCaretLeft>
                </button>
                <div
                    className="section-title"
                >
                    <div
                        className="title"
                    >
                        { sectionName[0] } 
                    </div>
                    <div
                        className="detail"
                    >
                        { sectionDetail }
                    </div>
                </div>
                <button onClick={() => goNext()}>
                    <FaCaretRight 
                        size={32} 
                        color={idx<sections.length-1?"var(--color-accent)":"transparent"}>
                    </FaCaretRight>
                </button>
            </div>
        </div>
    );
};

export default QuickNav;