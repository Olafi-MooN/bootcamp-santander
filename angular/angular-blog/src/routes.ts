import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { YoutubeComponent } from './frames/youtube.component';
import { LinkedinComponent } from './frames/linkedin.component';
import { GithubComponent } from './frames/github.component';

export const routes: Route[] = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'youtube',
    component: YoutubeComponent,
  },
  {
    path: 'linkedin',
    component: LinkedinComponent,
  },
  {
    path: 'github',
    component: GithubComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
