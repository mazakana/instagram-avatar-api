"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, Shield, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const coupons = [
  {
    id: 1,
    store: "Mercado Livre",
    logo: "/logos/mercado-livre.png",
    discount: "55%",
    title: "Cupom de 55% de desconto em todo o site Mercado Livre",
    price: "R$29,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6ce332-4d97-4245-97b2-9809126fa74d",
  },
  {
    id: 2,
    store: "Amazon",
    logo: "/logos/amazon.png",
    discount: "50%",
    title: "Cupom de 50% de desconto em todo o site da Amazon",
    price: "R$29,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf61d-6ecb-4c50-a37b-6c4d3546111d",
  },
  {
    id: 3,
    store: "Shopee",
    logo: "/logos/shopee.png",
    discount: "45%",
    title: "Cupom de 45% de desconto + frete grátis em todo o site Shopee",
    price: "R$29,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf779-edb7-4ac9-b213-d7c767774a6e",
  },
  {
    id: 4,
    store: "Kabum",
    logo: "/logos/kabum.png",
    discount: "40%",
    title: "Cupom de 40% de desconto em eletrônicos no site Kabum",
    price: "R$27,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf698-a20a-4bcb-86d6-2bb11fa42be2",
  },
  {
    id: 5,
    store: "iFood",
    logo: "/logos/ifood.png",
    discount: "60%",
    title: "Cupom de 60% de desconto em compras acima de R$20 no site iFood",
    price: "R$19,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf6ef-b86c-4790-9927-e55589fc81a8",
  },
  {
    id: 6,
    store: "Shein",
    logo: "/logos/shein.jpeg",
    discount: "55%",
    title: "Cupom de 55% de desconto em roupas no site da Shein",
    price: "R$19,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf7a3-6ca6-4a91-94f0-c37c2e051cee",
  },
  {
    id: 7,
    store: "Magalu",
    logo: "/logos/magalu.png",
    discount: "45%",
    title: "Cupom de 45% de desconto em eletrodomésticos no site Magazine Luiza",
    price: "R$14,70",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf729-10c2-48b5-ad34-f60caf8df237",
  },
  {
    id: 8,
    store: "Submarino",
    logo: "/logos/submarino.png",
    discount: "40%",
    title: "Cupom de 40% de desconto em todo o site Submarino",
    price: "R$10,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf7d4-66fd-406e-a498-4d990d7e62f7",
  },
  {
    id: 9,
    store: "Netshoes",
    logo: "/logos/netshoes.png",
    discount: "40%",
    title: "Cupom de 40% de desconto em todo o site Netshoes",
    price: "R$10,90",
    link: "https://app.pushinpay.com.br/service/pay/9f6cf7fb-a56d-4db2-8223-6a9ba08e82fc",
  },
]

const faqs = [
  {
    question: "Como vou acessar meus cupons?",
    answer: "Após o pagamento você terá acesso imediato aqui no site.",
  },
  {
    question: "Os cupons realmente funcionam?",
    answer: "Sim, são testados diariamente e funcionam nos maiores sites do Brasil.",
  },
  {
    question: "Posso usar o cupom mais de uma vez?",
    answer: "Não. O cupom é único e exclusivo para uma compra. Para nova compra, será necessário adquirir novo cupom.",
  },
  {
    question: "O site é seguro?",
    answer: "Sim, utilizamos criptografia SSL e sistemas de pagamento seguros para proteger seus dados.",
  },
  {
    question: "A entrega é automática?",
    answer: "Sim, após a confirmação do pagamento, você recebe o cupom automaticamente em até 10 minutos.",
  },
  {
    question: "Tenho suporte se precisar de ajuda?",
    answer: "Sim, oferecemos suporte via WhatsApp para esclarecer qualquer dúvida sobre os cupons.",
  },
]

const testimonials = [
  {
    name: "Camila",
    text: "Peguei 50% de desconto no Magalu e funcionou na hora.",
    avatar: "/testimonials/camila.png",
  },
  {
    name: "Rafael",
    text: "O cupom do Kabum me deu 100% de desconto. Valeu demais!",
    avatar: "/testimonials/rafael.png",
  },
  {
    name: "Vanessa",
    text: "Comprei na Shein com 55% de desconto e liberaram rapidinho.",
    avatar: "/testimonials/vanessa.png",
  },
  {
    name: "João",
    text: "Usei pra comprar tênis com desconto e funcionou. Economizei bem.",
    avatar: "/testimonials/joao.png",
  },
]

const names = [
  "Lucas Pereira",
  "Ana Silva",
  "Carlos Santos",
  "Maria Oliveira",
  "João Costa",
  "Fernanda Lima",
  "Pedro Almeida",
  "Juliana Rocha",
  "Rafael Souza",
  "Camila Ferreira",
  "Bruno Martins",
  "Larissa Gomes",
  "Diego Ribeiro",
  "Vanessa Cardoso",
  "Thiago Barbosa",
  "Priscila Nascimento",
  "Rodrigo Dias",
  "Tatiana Moura",
  "Gustavo Pinto",
  "Renata Campos",
  "Marcelo Vieira",
  "Adriana Teixeira",
  "Felipe Araújo",
  "Cristina Monteiro",
  "André Carvalho",
  "Patrícia Freitas",
  "Leonardo Ramos",
  "Simone Castro",
  "Fábio Correia",
  "Daniela Lopes",
  "Vinicius Melo",
  "Roberta Cunha",
  "Mateus Farias",
  "Luciana Borges",
  "Gabriel Nunes",
  "Mônica Reis",
  "Eduardo Mendes",
  "Sabrina Torres",
  "Henrique Duarte",
  "Aline Machado",
  "Ricardo Azevedo",
  "Carla Nogueira",
  "Leandro Moreira",
  "Bianca Santana",
  "Otávio Caldeira",
  "Natália Peixoto",
  "Sérgio Batista",
  "Elaine Coelho",
  "Márcio Tavares",
  "Jéssica Andrade",
  "Alexandre Fonseca",
  "Viviane Guimarães",
]

const stores = ["Mercado Livre", "Amazon", "Shopee", "Kabum", "iFood", "Shein", "Magalu", "Submarino", "Netshoes"]
const discounts = ["40%", "45%", "50%", "55%", "60%"]

export default function DescontoSecreto() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [notification, setNotification] = useState<string>("")
  const [showNotification, setShowNotification] = useState(false)

  const scrollToCoupons = () => {
    const couponsSection = document.getElementById("coupons")
    if (couponsSection) {
      couponsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)]
      const randomStore = stores[Math.floor(Math.random() * stores.length)]
      const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)]

      setNotification(`${randomName} comprou o cupom de ${randomDiscount} de desconto do ${randomStore}`)
      setShowNotification(true)

      setTimeout(() => {
        setShowNotification(false)
      }, 4000)
    }

    const interval = setInterval(showRandomNotification, Math.random() * 10000 + 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Floating Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-500">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 leading-tight">{notification}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Cupons de Desconto para Todos os Sites do Brasil</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Desbloqueie cupons ocultos em grandes lojas como Mercado Livre, Amazon, iFood, Kabum, Shopee, Magalu, Shein
            e outras.
          </p>
          <Button
            onClick={scrollToCoupons}
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 text-lg font-semibold rounded-lg"
          >
            Quero desbloquear meus cupons agora
          </Button>
        </div>
      </header>

      {/* Coupons Section */}
      <section id="coupons" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {coupons.map((coupon) => (
              <Card key={coupon.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={coupon.logo || "/placeholder.svg"}
                        alt={`${coupon.store} logo`}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                        {coupon.discount} OFF
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{coupon.title}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-4">{coupon.price}</div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button
                        onClick={() => window.open(coupon.link, "_blank")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                      >
                        Resgatar meu cupom
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-sky-100 border border-sky-200 rounded-lg p-4 text-center">
            <p className="text-sky-800 font-medium">
              A entrega do cupom acontece em até 10 minutos após o pagamento. Atendimento via WhatsApp em caso de
              dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {openFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">O que os nossos clientes dizem</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">Ambiente Seguro e Verificado</h3>
              <p className="text-gray-600 text-sm">para Pagamentos Online</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">Cupons Reais e Entrega</h3>
              <p className="text-gray-600 text-sm">Automática</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-semibold mb-2">Descontos em Tempo Real</h3>
              <p className="text-gray-600 text-sm">para Todo o Brasil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">2024 © Desconto Secreto – Todos os direitos reservados</p>
          <div className="flex justify-center gap-6 text-sm">
            <button className="hover:text-gray-300 transition-colors">Política de Privacidade</button>
            <button className="hover:text-gray-300 transition-colors">Termos de Uso</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
