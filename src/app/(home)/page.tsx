import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/cn';
import { Hero } from './page.client';

const buttonVariants = cva(
  'inline-flex justify-center px-5 py-3 rounded-full font-medium tracking-tight transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-brand-foreground hover:bg-brand-200',
        secondary: 'border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export default function HomePage() {
  return (
    <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border mt-4">
      <Hero />
      <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
        <p className="mt-12 text-xs text-brand font-medium rounded-full p-2 border border-brand/50 w-fit">
          your career operations hub.
        </p>
        <h1 className="text-4xl my-8 leading-tight font-medium xl:text-5xl xl:mb-12">
          You got the job.
          <br />
          and it didn't cost you a <span className="text-brand">thing</span>.
        </h1>
        <div className="flex flex-row items-center gap-4 flex-wrap w-fit">
          <Link href="/docs/introduction/quick-start" className={cn(buttonVariants(), 'max-sm:text-sm')}>
            Get Started
          </Link>
          <Link href="/docs" className={cn(buttonVariants({ variant: 'secondary' }), 'max-sm:text-sm')}>
            Browse Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
