type Eventx = "click" | "mouseover" | "scroll";
type ExcludeEvent = Exclude<Eventx, "scroll">; //'click', 'mouseover'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click");
// handleEvent("scroll"); // throw error, cause its excluded
