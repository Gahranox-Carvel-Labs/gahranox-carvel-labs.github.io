import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
    transition('* <=> *', [
        // 1. Prepare styles for ENTRING and LEAVING elements
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            })
        ], { optional: true }),

        // 2. Define initial state for ENTERING element (hidden)
        query(':enter', [
            style({ opacity: 0, transform: 'scale(0.98)' })
        ], { optional: true }),

        // 3. Run animations in parallel
        group([
            // Fade out LEAVING element
            query(':leave', [
                animate('400ms ease-out', style({ opacity: 0, transform: 'scale(0.98)' }))
            ], { optional: true }),

            // Fade in ENTERING element
            query(':enter', [
                animate('400ms ease-in', style({ opacity: 1, transform: 'scale(1)' }))
            ], { optional: true })
        ])
    ])
]);
