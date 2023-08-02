import Accordion from '../components/Accordion/Accordion'

const faq = [
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
  return <Accordion items={faq} />
}

export default AccordionPage
