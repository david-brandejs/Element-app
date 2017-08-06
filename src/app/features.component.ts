import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'features',
  template: `
<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in sapien. Pellentesque sapien. Mauris elementum mauris vitae tortor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cras elementum. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Phasellus faucibus molestie nisl. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Etiam neque.

Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam id dolor. Phasellus rhoncus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Quisque porta. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Maecenas sollicitudin. Nunc auctor. Integer in sapien. Integer imperdiet lectus quis justo. Nulla non lectus sed nisl molestie malesuada. Aenean placerat. Integer lacinia.

Nullam sit amet magna in magna gravida vehicula. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Phasellus et lorem id felis nonummy placerat. Aliquam erat volutpat. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam quis nulla. Morbi scelerisque luctus velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Donec vitae arcu. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Aenean vel massa quis mauris vehicula lacinia. Nulla non lectus sed nisl molestie malesuada. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Etiam dictum tincidunt diam. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.
</p>
`
})
export class FeaturesComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void { }
}