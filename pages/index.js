import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { App } from './testpage'

export default function Home({ blogs }) {
  return (<div className={styles['container']}>
    <Head>
      <title>Handbook | Reloadly</title>
    </Head>
    {App()}
    <h1 className={styles['header']}>Introduction</h1>
    <p className={styles['subtitle']}>The Reloadly team handbook is the central source of information for how Reloadly is run as a company. As part of our core values of being transparent and accountable, the handbook is open to every employee at Reloadly and feedback is welcome. Please make a request to our team to suggest any improvements and use the issues section to ask questions or provide clarification.</p>
    <h2>Company</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[0].slug}`} target='_blank'>{blogs[0].title}</a></li>
      <li><a href={`/blog/${blogs[1].slug}`} target='_blank'>{blogs[1].title}</a></li>
      <li><a href={`/blog/${blogs[2].slug}`} target='_blank'>{blogs[2].title}</a></li>    
      <li><a href={`/blog/${blogs[3].slug}`} target='_blank'>{blogs[3].title}</a></li>
    </ul>
    <h2>Culture</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[4].slug}`} target='_blank'>{blogs[4].title}</a></li>
      <li><a href={`/blog/${blogs[5].slug}`} target='_blank'>{blogs[5].title}</a></li>
      <li><a href={`/blog/${blogs[6].slug}`} target='_blank'>{blogs[6].title}</a></li>    
      <li><a href={`/blog/${blogs[7].slug}`} target='_blank'>{blogs[7].title}</a></li>
      <li><a href={`/blog/${blogs[8].slug}`} target='_blank'>{blogs[8].title}</a></li>
    </ul>
    <h2>Administration</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[9].slug}`} target='_blank'>{blogs[9].title}</a></li>
      <li><a href={`/blog/${blogs[10].slug}`} target='_blank'>{blogs[10].title}</a></li>
    </ul>
    <h2>Customer Success</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[11].slug}`} target='_blank'>{blogs[11].title}</a></li>
      <li><a href={`/blog/${blogs[12].slug}`} target='_blank'>{blogs[12].title}</a></li>
      <li><a href={`/blog/${blogs[13].slug}`} target='_blank'>{blogs[13].title}</a></li>
      <li><a href={`/blog/${blogs[14].slug}`} target='_blank'>{blogs[14].title}</a></li>
      <li><a href={`/blog/${blogs[15].slug}`} target='_blank'>{blogs[15].title}</a></li>
    </ul>
    <h2>Engineering</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[16].slug}`} target='_blank'>{blogs[16].title}</a></li>
      <li><a href={`/blog/${blogs[17].slug}`} target='_blank'>{blogs[17].title}</a></li>
      <li><a href={`/blog/${blogs[18].slug}`} target='_blank'>{blogs[18].title}</a></li>
      <li><a href={`/blog/${blogs[19].slug}`} target='_blank'>{blogs[19].title}</a></li>
      <li><a href={`/blog/${blogs[20].slug}`} target='_blank'>{blogs[20].title}</a></li>
      <li><a href={`/blog/${blogs[21].slug}`} target='_blank'>{blogs[21].title}</a></li>
      <li><a href={`/blog/${blogs[22].slug}`} target='_blank'>{blogs[22].title}</a></li>
      <li><a href={`/blog/${blogs[23].slug}`} target='_blank'>{blogs[23].title}</a></li>
    </ul>
    <h2>Finance</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[24].slug}`} target='_blank'>{blogs[24].title}</a></li>
      <li><a href={`/blog/${blogs[25].slug}`} target='_blank'>{blogs[25].title}</a></li>
    </ul>
    <h2>Growth</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[26].slug}`} target='_blank'>{blogs[26].title}</a></li>
      <li><a href={`/blog/${blogs[27].slug}`} target='_blank'>{blogs[27].title}</a></li>
      <li><a href={`/blog/${blogs[28].slug}`} target='_blank'>{blogs[28].title}</a></li>
      <li><a href={`/blog/${blogs[29].slug}`} target='_blank'>{blogs[29].title}</a></li>
      <li><a href={`/blog/${blogs[30].slug}`} target='_blank'>{blogs[30].title}</a></li>
      <li><a href={`/blog/${blogs[31].slug}`} target='_blank'>{blogs[31].title}</a></li>
    </ul>
    <h2>Human Resources</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[32].slug}`} target='_blank'>{blogs[32].title}</a></li>
      <li><a href={`/blog/${blogs[33].slug}`} target='_blank'>{blogs[33].title}</a></li>
      <li><a href={`/blog/${blogs[34].slug}`} target='_blank'>{blogs[34].title}</a></li>
      <li><a href={`/blog/${blogs[35].slug}`} target='_blank'>{blogs[35].title}</a></li>
      <li><a href={`/blog/${blogs[36].slug}`} target='_blank'>{blogs[36].title}</a></li>
      <li><a href={`/blog/${blogs[37].slug}`} target='_blank'>{blogs[37].title}</a></li>
      <li><a href={`/blog/${blogs[38].slug}`} target='_blank'>{blogs[38].title}</a></li>
      <li><a href={`/blog/${blogs[39].slug}`} target='_blank'>{blogs[39].title}</a></li>
      <li><a href={`/blog/${blogs[40].slug}`} target='_blank'>{blogs[40].title}</a></li>
      <li><a href={`/blog/${blogs[41].slug}`} target='_blank'>{blogs[41].title}</a></li>
      <li><a href={`/blog/${blogs[42].slug}`} target='_blank'>{blogs[42].title}</a></li>
      <li><a href={`/blog/${blogs[43].slug}`} target='_blank'>{blogs[43].title}</a></li>
      <li><a href={`/blog/${blogs[44].slug}`} target='_blank'>{blogs[44].title}</a></li>
      <li><a href={`/blog/${blogs[45].slug}`} target='_blank'>{blogs[45].title}</a></li>
      <li><a href={`/blog/${blogs[46].slug}`} target='_blank'>{blogs[46].title}</a></li>
      <li><a href={`/blog/${blogs[47].slug}`} target='_blank'>{blogs[47].title}</a></li>
      <li><a href={`/blog/${blogs[48].slug}`} target='_blank'>{blogs[48].title}</a></li>
    </ul>
    <h2>Procurement</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[49].slug}`} target='_blank'>{blogs[49].title}</a></li>
    </ul>
    <h2>Product</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[50].slug}`} target='_blank'>{blogs[50].title}</a></li>
      <li><a href={`/blog/${blogs[51].slug}`} target='_blank'>{blogs[51].title}</a></li>
      <li><a href={`/blog/${blogs[52].slug}`} target='_blank'>{blogs[52].title}</a></li>
      <li><a href={`/blog/${blogs[53].slug}`} target='_blank'>{blogs[53].title}</a></li>
      <li><a href={`/blog/${blogs[54].slug}`} target='_blank'>{blogs[54].title}</a></li>
      <li><a href={`/blog/${blogs[55].slug}`} target='_blank'>{blogs[55].title}</a></li>
    </ul>
    <h2>Sales</h2>
    <ul className={styles['blog-list']}>
      <li><a href={`/blog/${blogs[56].slug}`} target='_blank'>{blogs[56].title}</a></li>
      <li><a href={`/blog/${blogs[57].slug}`} target='_blank'>{blogs[57].title}</a></li>
      <li><a href={`/blog/${blogs[58].slug}`} target='_blank'>{blogs[58].title}</a></li>
      <li><a href={`/blog/${blogs[59].slug}`} target='_blank'>{blogs[59].title}</a></li>
      <li><a href={`/blog/${blogs[60].slug}`} target='_blank'>{blogs[60].title}</a></li>
    </ul>
  </div>)
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      blogs
    }
  }

}