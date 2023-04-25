import Image from "next/image"
export default function hero() {
  return (
    <div className="max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-2">
      <div className="max-w-[90%] mx-auto">
        <Image
        src={'/Images/header.1.jpg'}
        width={1000}
        height={1000}
        />
        </div>
        <div className="w-[90%] mx-auto">
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima velit vitae, esse provident rem accusantium nobis aut impedit officiis! Accusamus doloremque facere magnam numquam ex veritatis minus rem obcaecati.</p>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima velit vitae, esse provident rem accusantium nobis aut impedit officiis! Accusamus doloremque facere magnam numquam ex veritatis minus rem obcaecati.</p>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima velit vitae, esse provident rem accusantium nobis aut impedit officiis! Accusamus doloremque facere magnam numquam ex veritatis minus rem obcaecati.</p>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minima velit vitae, esse provident rem accusantium nobis aut impedit officiis! Accusamus doloremque facere magnam numquam ex veritatis minus rem obcaecati.</p>
        </div>
    </div>
  )
}
