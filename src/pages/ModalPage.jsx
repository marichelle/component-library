import { useState } from 'react'

import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const actionBar = (
    <div>
      <Button variation="primary" onClick={handleClose}>
        I Accept
      </Button>
    </div>
  )

  return (
    <div className="relative">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl">Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          recusandae reprehenderit eaque dignissimos. Eius nobis laborum
          laudantium sequi eos asperiores suscipit, soluta repellendus fuga
          beatae, ipsa, tenetur ab ullam optio ducimus a aspernatur veritatis
          alias! Quasi, temporibus ullam illo, consequatur totam quibusdam hic
          ex dolore, aliquid non explicabo eius esse voluptas. Ab corrupti
          dolore error labore voluptatum, nemo dolorem totam quisquam voluptates
          aliquid voluptas ullam quaerat! Officia aperiam excepturi nulla fugit
          doloribus dicta nihil repellat neque error? Explicabo alias recusandae
          aspernatur dolor velit, dignissimos nulla ullam cumque sequi quidem
          incidunt sint enim eum quisquam? Incidunt debitis ea pariatur eius
          quod?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, soluta
          cupiditate itaque est nihil earum hic, accusamus deserunt in culpa
          explicabo quisquam quas, accusantium dolore ipsa. Eligendi vel a
          placeat error incidunt? Alias perspiciatis dolorem repellat quia
          dignissimos voluptate reprehenderit? Ducimus aspernatur quisquam
          blanditiis? Eligendi consectetur suscipit laboriosam, obcaecati
          placeat corporis exercitationem, accusamus quidem architecto quasi
          inventore nostrum rerum, consequuntur cumque ipsa vero est at odio
          soluta provident! Libero sapiente id et unde dolorem iusto quod
          officiis architecto laboriosam consequuntur exercitationem
          reprehenderit repellendus odit, quibusdam, ut cupiditate veritatis
          aspernatur vel itaque laborum tenetur quae sequi. Esse non alias
          nesciunt molestiae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, omnis
          adipisci. Aliquid blanditiis, beatae fuga tempora ratione, quisquam
          reprehenderit illum suscipit repudiandae quis enim maxime. Unde illum
          id illo! Optio, necessitatibus ipsam? Sit repudiandae et nesciunt
          reiciendis ratione veniam ex eaque, incidunt, voluptas sunt ipsa
          ullam, vel odio. Perspiciatis voluptatum dignissimos eaque nemo.
          Exercitationem repellendus veritatis nemo quisquam, architecto,
          laborum eum a aut itaque distinctio velit, mollitia rem ea possimus?
          Asperiores inventore quis eaque voluptas quod pariatur corrupti natus
          ipsa laudantium id sint, tempora accusamus beatae! Doloribus aut
          numquam minus, nesciunt, est nulla quia laboriosam suscipit ullam
          magni unde minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          culpa! Ex accusamus architecto aut unde enim nesciunt incidunt ullam,
          nam libero! Dolore reprehenderit excepturi adipisci quidem molestiae
          asperiores nemo consequatur blanditiis fugit aperiam, doloribus
          quaerat molestias impedit libero tempora dicta unde voluptas vitae
          placeat accusamus quod ullam quisquam totam! Nam, perspiciatis!
          Commodi, ut rerum at recusandae omnis officiis aliquid harum! Numquam
          quis libero provident mollitia culpa nam praesentium cupiditate!
          Pariatur molestiae nesciunt aliquid, distinctio tenetur enim modi unde
          voluptate consectetur hic assumenda quae doloremque velit facilis
          incidunt ex nam consequuntur! Quas numquam itaque sequi? Tenetur
          corporis iste saepe ab! Illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          molestiae a consequatur? Eius, magnam sapiente minus vel non eveniet
          accusamus. Unde, architecto. Debitis amet, ex facere quo culpa porro
          quod eum eos error labore hic assumenda corporis similique sint vero
          neque facilis perspiciatis illum cumque aperiam ea nemo quis? Sunt rem
          voluptatum adipisci. Maxime blanditiis praesentium, doloribus amet
          dolores in est qui molestiae esse officia, veniam consectetur
          repellendus corporis minima deleniti consequatur commodi velit
          architecto ut, quaerat vero dignissimos. Cumque incidunt quo ipsa
          magnam. Eligendi quia iure corrupti incidunt minus voluptates,
          aspernatur iusto, eius magnam officiis, sunt optio totam fugiat.
        </p>
      </div>

      <br />

      <Button variation="primary" onClick={handleClick}>
        Open Modal
      </Button>

      {showModal && (
        <Modal actionBar={actionBar} onClose={handleClose}>
          <h2 className="text-3xl">
            Here is an important agreement for you to accept...
          </h2>
        </Modal>
      )}
    </div>
  )
}

export default ModalPage
