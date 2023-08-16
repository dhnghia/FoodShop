export async function generateStaticParams() {
    const postIds = ['1','2','3'];
   
    return postIds.map((postId) => {
        return {
            postId,
        }})
  }

function Page() {  
    return <h1>Details about product</h1>
}
export default Page

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by edit&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>



// const Home: NextPage = () => {

//   const [postId, setPostId] = React.useState<string | undefined>();
//   debugger
//   const router = useRouter();
//   React.useEffect(() => {
//     setPostId(router.query.postId as string | undefined);
//   }, [router]);

//   return (
//     <div className="container">
//       <h1>This is post {postId}</h1>

//       <h1>Other pages:</h1>
//       <ul>
//         <li><Link href="/">Home</Link></li>
//       </ul>
//     </div>
//   )
// }

// export default Home;
