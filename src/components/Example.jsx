import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Example(){
    const [selectedTopic, setSelectedTopic] = useState();
    let tabContent=<p>Please Select a Topic</p>
    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedButton);
    }
    if(selectedTopic){
      tabContent=<div id="tab-content">
      <h1>{EXAMPLES[selectedTopic].title}</h1>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    }
    return(<section id="examples">
    <h2>Examples</h2>

    <menu>
      <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleClick("components")}>
        Components
      </TabButton>
      <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButton>
      <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleClick("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleClick("state")}>States</TabButton>
    </menu>
    {/* {!selectedTopic ? (
      <p>Please Select a topic</p>
    ) : (
      <div id="tab-content">
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}
    {/* {!selectedTopic && <p>Please Select a Topic</p>}
    {selectedTopic && <div id="tab-content">
      <h1>{EXAMPLES[selectedTopic].title}</h1>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>} */}
    {tabContent}
  </section>);
}
