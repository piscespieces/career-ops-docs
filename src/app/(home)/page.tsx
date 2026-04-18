import Link from 'next/link';
import Image from 'next/image';
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
    <>
      <div className="relative flex min-h-[600px] h-[70vh] max-h-[900px] border rounded-2xl overflow-hidden mx-auto w-full max-w-[1400px] bg-origin-border mt-4">
        <Hero />
        <Image
          src="/hero_image.png"
          alt="hero-image"
          width={1628}
          height={1044}
          className="absolute top-[460px] left-[15%] max-w-[1400px] rounded-xl lg:top-[380px] block [animation:fade-in-delayed_700ms_ease_400ms_both]"
          priority
        />
        <div className="flex flex-col z-2 px-4 size-full md:p-12 max-md:items-center max-md:text-center">
          <p className="mt-12 text-xs text-brand font-medium rounded-full p-2 border border-brand/50 w-fit">
            Your career operations hub.
          </p>
          <h1 className="text-4xl my-8 leading-tight font-medium xl:text-5xl xl:mb-12">
            You got the job,
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

      <div className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12 lg:grid-cols-2 lg:mt-20">
        <p className="text-2xl tracking-tight leading-snug font-light col-span-full md:text-3xl xl:text-4xl">
          Turn any AI coding CLI into a full job search <span className="text-brand font-medium">command center</span>. Instead of <span className="text-brand font-medium">manually</span> tracking applications in a spreadsheet, you get an AI-powered pipeline that scan portals, generates tailored PDFs and tracks everything for you. It's like having a career coach for your job search, but <span className="text-brand font-medium">without the cost</span>.
        </p>

        <div className="relative h-[400px] lg:h-[560px] rounded-2xl col-span-full overflow-hidden">
          <Image
            src="/buffalo-dither.png"
            loading='lazy'
            alt="hero-image"
            width={1628}
            height={1044}
            className="absolute inset-0 size-full object-cover object-[80%_bottom] -z-1"
          />
        </div>

        <div className="rounded-2xl text-sm p-6 bg-origin-border shadow-lg border bg-fd-card">
          <h3 className="font-medium tracking-tight text-xl lg:text-2xl mb-6">Hello world</h3>
          <p className="mb-6">Hello world hello lorem ipsum dolor sit amet</p>
          <Link href="/docs" className={cn(buttonVariants({ variant: 'secondary' }), 'text-sm')}>
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}
