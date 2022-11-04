import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[href]'
})
export class ExternalLinkDirective implements OnChanges {
  @HostBinding('attr.class') classAttr: string | null = null;
  @HostBinding('attr.href') hrefAttr: string | null = null;
  @HostBinding('attr.rel') relAttr: string | null = null;
  @HostBinding('attr.target') targetAttr: string | null = null;
  @Input() class: string | undefined;
  @Input() href: string | undefined;

  ngOnChanges() {
    if (this.href) {
      this.hrefAttr = this.href;

      const classes = new Set(this.class?.split(' ').map(c => c.trim()) ?? []);

      if (isLinkExternal(this.href)) {
        classes.add('external');
        this.classAttr = Array.from(classes).join(' ');
        this.relAttr = 'noopener';
        this.targetAttr = '_blank';
      } else {
        classes.delete('external');
        this.classAttr = classes.size ? Array.from(classes).join(' ') : null;
        this.relAttr = null;
        this.targetAttr = null;
      }
    }
  }
}

export const isLinkExternal = (href: string | null) => {
  if (!href || href.startsWith('mailto:')) return false;
  return new URL(document.baseURI).origin !== new URL(href, document.baseURI).origin;
}
