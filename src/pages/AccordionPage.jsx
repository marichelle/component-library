import Accordion from '../components/Accordion/Accordion'

const faq1 = [
  {
    id: 1,
    label: 'Modi, a?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, saepe fugiat? Mollitia, magni omnis. Beatae mollitia ex aspernatur maiores, illum modi, provident officiis corporis atque in tenetur blanditiis quidem sequi, recusandae consectetur repellendus sint veritatis sit. Quia in quam sequi ea nostrum qui, eaque illo facilis voluptas similique? Officiis, dolore.',
  },
  {
    id: 2,
    label: 'Fugit, commodi?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quisquam. Doloremque distinctio in harum nesciunt suscipit quam quasi totam natus possimus excepturi hic ipsa sint illo molestias, similique fuga perspiciatis nam mollitia culpa non. Sit explicabo delectus inventore, voluptate ex molestias ipsa mollitia rerum dolorem dolorum dicta et quae exercitationem.',
  },
  {
    id: 3,
    label: 'Eaque, officiis?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, magni vitae voluptas odio nulla reprehenderit, aliquam autem non molestiae minus reiciendis nihil distinctio et at, sapiente inventore facere! Blanditiis culpa odit praesentium reiciendis. Atque, hic qui ad magnam inventore laudantium provident illum commodi, a beatae nihil voluptatibus delectus accusantium et.',
  },
]

const faq2 = [
  {
    id: 1,
    label: 'What is digital marketing?',
    content:
      'Digital marketing is any form of marketing that involves the use of digital channels such as websites, search engines, social media, email, and mobile applications. It is a way of connecting with potential customers and strengthening relationships with existing ones through the use of digital technologies.',
  },
  {
    id: 2,
    label: 'What are the benefits of digital marketing?',
    content:
      'Digital marketing offers businesses the opportunity to reach a large number of people quickly and cost-effectively. It allows businesses to target their ads to a specific audience, and track the performance of their ads in real-time. It also enables businesses to build relationships with their customers and engage with them in meaningful ways.',
  },
  {
    id: 3,
    label: 'What are some of the tools used in digital marketing?',
    content:
      'There are a variety of tools commonly used in digital marketing, including content marketing, social media marketing, email marketing, website optimization, search engine optimization, and more.',
  },
]

function AccordionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Accordion items={faq1} />
      </div>
      <div>
        <Accordion items={faq2} />
      </div>
    </div>
  )
}

export default AccordionPage
