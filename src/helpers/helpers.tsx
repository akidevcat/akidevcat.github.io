export function scrollTo(querySelector: string) {
    document.querySelector(querySelector)?.scrollIntoView({behavior: 'smooth'}); 
}