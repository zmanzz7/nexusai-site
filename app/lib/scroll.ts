// Scroll offset in pixels — increase to show more content above the target element
export const SCROLL_OFFSET = 300;

export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
