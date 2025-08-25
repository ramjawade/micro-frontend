# Shop App SCSS Variables & Design System

This directory contains the SCSS variables and design tokens for the Shop application, providing a consistent and maintainable approach to styling.

## File Structure

- `_variables.scss` - Core design tokens and variables
- `main.scss` - Main SCSS file that imports variables and component styles

## Available Variables

### Colors

#### Brand Colors
- `$primary` - Primary brand color (#007bff)
- `$primary-dark` - Darker primary variant (#0056b3)
- `$primary-light` - Lighter primary variant (#3391ff)
- `$secondary` - Secondary brand color (#6c757d)
- `$accent` - Accent color (#28a745)

#### Semantic Colors
- `$success` - Success state color (#28a745)
- `$warning` - Warning state color (#ffc107)
- `$danger` - Danger/error state color (#dc3545)
- `$info` - Information state color (#17a2b8)

#### Text Colors
- `$text-primary` - Primary text color (#2c3e50)
- `$text-secondary` - Secondary text color (#495057)
- `$text-muted` - Muted text color (#6c757d)

#### Background Colors
- `$background-light` - Light background (#f8f9fa)
- `$light` - General light color (#f8f9fa)

### Spacing

Uses an 8px grid system:
- `$spacer` - Base spacing unit (1rem = 16px)
- `$spacers` - Map of spacing values (0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24)

Usage: `padding: map-get($spacers, 4);` // 16px

### Typography

- `$font-family-base` - Base font family ('Poppins', sans-serif)
- `$font-size-base` - Base font size (1rem)
- `$font-size-sm` - Small font size (0.875rem)
- `$font-size-lg` - Large font size (1.125rem)
- `$font-size-xl` - Extra large font size (1.25rem)
- `$font-size-2xl` - 2x large font size (1.5rem)
- `$font-size-3xl` - 3x large font size (1.75rem)
- `$font-size-4xl` - 4x large font size (2rem)

#### Font Weights
- `$font-weight-normal` - Normal weight (400)
- `$font-weight-medium` - Medium weight (500)
- `$font-weight-semibold` - Semi-bold weight (600)
- `$font-weight-bold` - Bold weight (700)

### Borders

- `$border-radius` - Base border radius (0.375rem)
- `$border-radius-sm` - Small border radius (0.25rem)
- `$border-radius-md` - Medium border radius (0.5rem)
- `$border-radius-lg` - Large border radius (0.75rem)
- `$border-radius-xl` - Extra large border radius (1rem)
- `$border-radius-2xl` - 2x large border radius (1.5rem)
- `$border-radius-3xl` - 3x large border radius (2rem)

### Shadows

- `$box-shadow` - Base box shadow
- `$box-shadow-sm` - Small box shadow
- `$box-shadow-md` - Medium box shadow
- `$box-shadow-lg` - Large box shadow
- `$box-shadow-xl` - Extra large box shadow
- `$box-shadow-hover` - Hover state box shadow

### Breakpoints

- `$breakpoint-sm` - Small devices (576px)
- `$breakpoint-md` - Medium devices (768px)
- `$breakpoint-lg` - Large devices (992px)
- `$breakpoint-xl` - Extra large devices (1200px)
- `$breakpoint-xxl` - Extra extra large devices (1400px)

### Animation

- `$animation-duration-fast` - Fast animation (0.2s)
- `$animation-duration-base` - Base animation (0.3s)
- `$animation-duration-slow` - Slow animation (0.6s)
- `$animation-timing` - Animation timing function

## Usage Examples

### In Component SCSS Files

```scss
@import '../../scss/variables';

.my-component {
  background-color: $background-light;
  border-radius: $border-radius-lg;
  padding: map-get($spacers, 4);
  color: $text-primary;
  font-weight: $font-weight-semibold;
  
  @media (max-width: $breakpoint-md) {
    padding: map-get($spacers, 2);
  }
}
```

### Responsive Design

```scss
@media (max-width: $breakpoint-sm) {
  .container {
    padding: 0 map-get($spacers, 1);
  }
}

@media (max-width: $breakpoint-md) {
  .container {
    padding: 0 map-get($spacers, 2);
  }
}
```

### Button Styling

```scss
.btn {
  border-radius: $btn-border-radius;
  font-weight: $font-weight-medium;
  transition: all $animation-duration-fast $animation-timing;
  
  &.btn-primary {
    background-color: $primary;
    border-color: $primary;
    
    &:hover {
      background-color: $primary-dark;
      border-color: $primary-dark;
    }
  }
}
```

## Best Practices

1. **Always use variables** instead of hardcoded values
2. **Use semantic color names** (e.g., `$text-primary` instead of `#2c3e50`)
3. **Use spacing map** for consistent spacing (`map-get($spacers, 4)`)
4. **Use breakpoint variables** for responsive design
5. **Import variables** at the top of each component SCSS file
6. **Keep variables organized** by category (colors, spacing, typography, etc.)

## Adding New Variables

When adding new variables:

1. Add them to the appropriate section in `_variables.scss`
2. Use descriptive names that indicate their purpose
3. Follow the existing naming convention
4. Add comments explaining the variable's use case
5. Update this README if the variable is meant to be reused

## Maintenance

- Keep variables organized and well-commented
- Use consistent naming conventions
- Avoid duplicating values
- Consider creating new variables for commonly used values
- Review and refactor variables periodically for consistency
