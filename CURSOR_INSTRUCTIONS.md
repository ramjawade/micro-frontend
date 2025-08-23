# Cursor Chat Instructions

## 🎯 **Core Principles**

### **1. Code Quality & Standards**
- Always write **clean, readable, and maintainable code**
- Follow **Angular best practices** and **Angular style guide**
- Use **TypeScript strict mode** and proper typing
- Implement **proper error handling** and validation
- Write **self-documenting code** with clear variable/function names
- Add **meaningful comments** for complex logic

### **2. Design Philosophy**
- **Keep it simple** - Prefer Bootstrap CSS over custom CSS
- **Minimal overrides** - Only override Bootstrap when absolutely necessary
- **Use Bootstrap variables** for consistent theming
- **Responsive design** - Ensure mobile-first approach
- **Accessibility** - Follow WCAG guidelines and semantic HTML

### **3. File Organization**
- **Modular structure** - Organize code into logical modules
- **Consistent naming** - Use kebab-case for files, PascalCase for components
- **Separation of concerns** - Keep styles, logic, and templates separate
- **SCSS organization** - Use partials and variables for maintainability

## 🚀 **Development Workflow**

### **Before Starting Any Task:**
1. **Analyze the current codebase** structure
2. **Understand the existing patterns** and conventions
3. **Check for similar implementations** to maintain consistency
4. **Plan the approach** before writing code

### **During Development:**
1. **Write clean, simple code** first
2. **Test incrementally** - build and verify each step
3. **Use existing patterns** and avoid reinventing solutions
4. **Document changes** with clear commit messages

### **After Implementation:**
1. **Verify the build** works without errors
2. **Check for linting issues** and fix them
3. **Test functionality** in the browser
4. **Ensure responsive behavior** across devices

## 🎨 **Styling Guidelines**

### **CSS/SCSS Approach:**
- **Bootstrap First**: Use Bootstrap classes whenever possible
- **Minimal Custom CSS**: Only add custom styles when Bootstrap doesn't suffice
- **CSS Variables**: Use CSS custom properties for theming
- **Consistent Spacing**: Follow Bootstrap's spacing scale
- **Mobile-First**: Design for mobile, enhance for desktop

### **When to Override Bootstrap:**
- ✅ **Brand colors** and primary/secondary colors
- ✅ **Border radius** for consistent rounded corners
- ✅ **Custom spacing** that can't be achieved with utilities
- ❌ **Avoid overriding** basic component behavior
- ❌ **Avoid custom** button styles unless necessary

## 🔧 **Technical Standards**

### **Angular Components:**
```typescript
// Always use standalone components
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  // Use proper typing
  public formData: FormGroup;
  
  // Implement lifecycle hooks properly
  ngOnInit(): void {
    // Initialize component
  }
  
  // Use proper error handling
  private handleError(error: any): void {
    console.error('Error occurred:', error);
  }
}
```

### **Form Handling:**
- **Reactive Forms** for complex forms with validation
- **Template-driven forms** for simple forms
- **Proper validation** with meaningful error messages
- **Form state management** with proper reset and submission handling

### **Service Implementation:**
```typescript
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  // Use proper typing
  public getData(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>('/api/data');
  }
  
  // Implement error handling
  private handleHttpError(error: HttpErrorResponse): Observable<never> {
    console.error('HTTP Error:', error);
    return throwError(() => new Error('Something went wrong'));
  }
}
```

## 📱 **Responsive Design**

### **Breakpoint Strategy:**
- **Mobile First**: Design for small screens first
- **Bootstrap Breakpoints**: Use Bootstrap's responsive utilities
- **Flexible Layouts**: Use flexbox and grid for responsive behavior
- **Touch-Friendly**: Ensure touch targets are at least 44px

### **Responsive Patterns:**
```html
<!-- Use Bootstrap responsive classes -->
<div class="col-12 col-md-6 col-lg-4">
  <!-- Content adapts to screen size -->
</div>

<!-- Responsive utilities -->
<div class="d-none d-md-block">
  <!-- Hidden on mobile, visible on medium+ -->
</div>
```

## 🧪 **Testing & Quality**

### **Code Quality Checks:**
1. **Build verification** - Ensure `npm run build` succeeds
2. **Linting** - Fix any ESLint or TSLint errors
3. **Type checking** - Verify TypeScript compilation
4. **Browser testing** - Test in multiple browsers/devices

### **Testing Strategy:**
- **Unit tests** for components and services
- **Integration tests** for form interactions
- **E2E tests** for critical user flows
- **Accessibility testing** for screen readers

## 📚 **Documentation Standards**

### **Code Comments:**
```typescript
/**
 * Handles user authentication
 * @param credentials - User login credentials
 * @returns Observable of authentication result
 */
public authenticate(credentials: LoginCredentials): Observable<AuthResult> {
  // Implementation
}
```

### **README Files:**
- **Clear purpose** and functionality description
- **Installation** and setup instructions
- **Usage examples** with code snippets
- **Configuration** options and customization
- **Troubleshooting** common issues

## 🚫 **What to Avoid**

### **Anti-Patterns:**
- ❌ **Complex animations** that impact performance
- ❌ **Heavy custom CSS** when Bootstrap suffices
- ❌ **Inline styles** in components
- ❌ **Hardcoded values** instead of variables
- ❌ **Complex nested selectors** in CSS
- ❌ **Over-engineering** simple solutions

### **Performance Issues:**
- ❌ **Large bundle sizes** from unnecessary dependencies
- ❌ **Memory leaks** from unsubscribed observables
- ❌ **Heavy DOM manipulation** instead of Angular bindings
- ❌ **Unoptimized images** or assets

## 🔄 **Iteration Process**

### **When User Requests Changes:**
1. **Understand the request** completely
2. **Analyze current implementation** for issues
3. **Propose simple solutions** first
4. **Implement incrementally** and test each step
5. **Verify the result** meets user expectations

### **When Issues Arise:**
1. **Identify the root cause** before making changes
2. **Check build logs** for compilation errors
3. **Verify file paths** and import statements
4. **Test minimal changes** to isolate problems
5. **Document the solution** for future reference

## 📋 **Checklist for Every Command**

Before delivering any solution, ensure:

- [ ] **Code follows Angular best practices**
- [ ] **Uses Bootstrap CSS when possible**
- [ ] **Minimal custom CSS overrides**
- [ ] **Proper TypeScript typing**
- [ ] **Clean, readable code structure**
- [ ] **Responsive design considerations**
- [ ] **Accessibility compliance**
- [ ] **Error handling implemented**
- [ ] **Build verification completed**
- [ ] **Documentation provided**

## 🎯 **Success Metrics**

A successful implementation should:

1. **Build without errors** on first attempt
2. **Follow existing patterns** in the codebase
3. **Use minimal custom code** while achieving goals
4. **Be responsive** across all device sizes
5. **Maintain performance** and load quickly
6. **Be easily maintainable** by other developers
7. **Meet accessibility standards** for all users

---

**Remember**: Always prioritize **simplicity**, **maintainability**, and **Bootstrap-first approach** over complex custom solutions. The goal is to create clean, professional applications that are easy to maintain and extend.
