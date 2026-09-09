import MarkdownIt from "markdown-it";
import attrs from "markdown-it-attrs";


interface MarkDownBubble {
    text: string;
}


const MarkDownBubble: React.FC<MarkDownBubble> = ({text}) => {
    const md = MarkdownIt({
        html:true,
        breaks:true,
    });

    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const href = tokens[idx].attrGet("href");

        if(!tokens[idx].attrGet("class")) {
            tokens[idx].attrPush([
                "class",
                href?.startsWith("https://") ? "text-link-color" : "text-secondary-color"
            ])
        }

        return self.renderToken(tokens, idx, options);
    }

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        tokens[idx].attrPush(["class", "w-full"]);
        return self.renderToken(tokens, idx, options);
    }

    md.use(attrs);
    
    //_italacize_ **bold** *italacize* ~~strikethrough~~
    //writing {className} right next to any text enclosure can apply classes

    return(
        <div dangerouslySetInnerHTML={{__html: md.render(text)}}/>
    )
} // className="text-primary bg-bg-grey p-3 w-full h-full"

export default MarkDownBubble;