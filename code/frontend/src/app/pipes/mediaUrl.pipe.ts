import { Pipe, PipeTransform } from '@angular/core';// Import your environment
import { environment } from '../../environments/environment';

@Pipe({
    name: 'mediaUrl',
    standalone: true // Use standalone if your project is Angular 14+ or using standalone components
    // Otherwise, remove this and ensure it's declared/imported in a module
})
export class MediaUrlPipe implements PipeTransform {

    transform(relativePath: string): string {
        // Get the base URL from the environment
        const baseUrl = environment.mediaBaseUrl;

        if (!baseUrl) {
            console.warn('Media base URL is not configured in environment. Returning relative path.');
            return relativePath; // Fallback to relative path if base URL isn't set
        }
        console.log(relativePath);
        // Ensure correct concatenation regardless of leading/trailing slashes
        const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
        const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;

        console.log(base, relativePath);

        return `${base}/${path}`;
    }
}