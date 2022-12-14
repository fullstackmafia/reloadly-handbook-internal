import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Blog({ frontmatter, markdown}) {
  console.log(frontmatter)
  return (
    <div className={styles['page-wrapper']}>
      <div className={styles['container']}>
      <Head>
        <title>Handbook | {frontmatter.title}</title>
      </Head>
      <h1 className={styles['header']}>{frontmatter.title}</h1>
      <hr />
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
      </div>
      <div>
      <div className={styles['author-details']}>
        <h3>Maintained by</h3>
        {Object.keys(frontmatter).map((element, i) => (
          <a href={frontmatter.email[i]} title={frontmatter.author[i]} key={i}>
          <img className={styles['page-maintainer']} src={frontmatter.image[i]}/>
          </a>
        ))}
        
      </div>
      <div>
        <p>Contribute to this page</p>
        <a href='github repo link'>View Source</a>
      </div>
      <h4>On this page</h4>
      {Object.keys(frontmatter).map((element, j) => (
        <ul>
          <li>
          <Link href={`#${frontmatter.headers[j]}`} key={j} >
            <a>{frontmatter.topics[j]}</a>
          </Link>
          </li>
        </ul>
        ))}
      
      </div>
    </div>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/blogs')

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false // This shows a 404 page if the page is not found
  }
}