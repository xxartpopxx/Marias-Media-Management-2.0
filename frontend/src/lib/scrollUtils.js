/**
 * Scroll to an element with an offset to account for fixed headers
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset in pixels (default 120px for header + padding)
 */
export const scrollToElementWithOffset = (elementId, offset = 120) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scroll to contact section with proper offset
 */
export const scrollToContact = () => {
  scrollToElementWithOffset('contact', 120);
};
