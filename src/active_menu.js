//Implementing Plan
//every section elements menu items
//Observe all the sections using intersection observer 
//make menu active item at the observing section
//Observing section: 
// -if several section observe on the page at the same time 
//  the first section's menu is selected 
// -when the scroll is all the way down, the menu of final section is activated

const sectionIds = [
  '#home', '#about', '#skills', '#work', '#testimonial', '#contact',
];

const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));

const visibleSections = sectionIds.map(() => false); 

console.log(navItems);

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));
function observerCallback(entries){
  let selectLastOne; //flag
  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne = 
    index === sectionIds.length - 1 &&
    entry.isIntersecting && 
    entry.intersectionRation >= 0.99;

  }
  );
  console.log(visibleSections);
  console.log(selectLastOne);


  const navIndex = selectLastOne 
  ? sectionIds.length - 1 
  : findFirstIntersecting(visibleSections);
}

function findFirstIntersecting(intersections){
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0 ;

}