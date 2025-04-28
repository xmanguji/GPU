import Image from "next/image"
import { ChevronRight, Cpu, Database, Globe, Layers, Server, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Accelerating AI Innovation with NVIDIA GPUs
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Unlock unprecedented computational power for machine learning and AI workloads with NVIDIA's
                    cutting-edge GPU technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700">Explore Products</Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-950">
                    Learn About CUDA with Joco
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/emerald-power.png"
                  alt="NVIDIA GPU Hardware"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Machine Learning GPU Portfolio
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our comprehensive range of GPUs designed specifically for AI and machine learning workloads.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 hover:border-green-600 transition-all">
                <CardHeader>
                  <CardTitle>NVIDIA A100</CardTitle>
                  <CardDescription>Data Center GPU</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/nvidia-a100-closeup.png"
                    alt="NVIDIA A100"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover mb-4"
                  />
                  <p className="text-sm text-gray-500">
                    The NVIDIA A100 Tensor Core GPU delivers unprecedented acceleration for AI, data analytics, and HPC.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 hover:border-green-600 transition-all">
                <CardHeader>
                  <CardTitle>NVIDIA H100</CardTitle>
                  <CardDescription>Hopper Architecture</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/nvidia-h100-closeup.png"
                    alt="NVIDIA H100"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover mb-4"
                  />
                  <p className="text-sm text-gray-500">
                    The NVIDIA H100 Tensor Core GPU is the most advanced AI GPU ever built, featuring the new Hopper
                    architecture.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 hover:border-green-600 transition-all">
                <CardHeader>
                  <CardTitle>NVIDIA DGX Systems</CardTitle>
                  <CardDescription>AI Supercomputing</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/data-center-powerhouse.png"
                    alt="NVIDIA DGX Systems"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover mb-4"
                  />
                  <p className="text-sm text-gray-500">
                    NVIDIA DGX systems are purpose-built for enterprise AI, offering unprecedented compute density and
                    performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Details</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="cuda" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">CUDA Technology</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    CUDA is a parallel computing platform and programming model developed by NVIDIA for general
                    computing on GPUs.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-600" />
                    <span>Parallel computing architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-600" />
                    <span>Thousands of computing cores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-600" />
                    <span>Optimized for deep learning frameworks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-600" />
                    <span>Comprehensive developer toolkit</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-green-600 hover:bg-green-700">Download CUDA Toolkit</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/cuda-parallel-architecture.png"
                  alt="CUDA Architecture"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="applications" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Applications & Use Cases
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NVIDIA GPUs power innovation across industries and applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Deep Learning</h3>
                <p className="text-center text-sm text-gray-500">
                  Train complex neural networks faster with NVIDIA's GPU acceleration for deep learning frameworks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Big Data Analytics</h3>
                <p className="text-center text-sm text-gray-500">
                  Process and analyze massive datasets with GPU-accelerated data science tools and libraries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Server className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">High Performance Computing</h3>
                <p className="text-center text-sm text-gray-500">
                  Solve complex scientific and engineering problems with GPU-accelerated simulations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Computer Vision</h3>
                <p className="text-center text-sm text-gray-500">
                  Develop advanced image recognition and processing applications with GPU acceleration.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Cpu className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Generative AI</h3>
                <p className="text-center text-sm text-gray-500">
                  Create cutting-edge generative models for text, images, and more with NVIDIA GPUs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Autonomous Systems</h3>
                <p className="text-center text-sm text-gray-500">
                  Power self-driving vehicles and robotics with GPU-accelerated AI and sensor processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="specs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Technical Specifications
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare our machine learning GPU specifications to find the right solution for your workloads.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <Tabs defaultValue="datacenter" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="datacenter">Data Center</TabsTrigger>
                  <TabsTrigger value="workstation">Workstation</TabsTrigger>
                  <TabsTrigger value="embedded">Embedded</TabsTrigger>
                </TabsList>
                <TabsContent value="datacenter" className="mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-600 text-white">
                          <th className="border p-2 text-left">Model</th>
                          <th className="border p-2 text-left">Architecture</th>
                          <th className="border p-2 text-left">CUDA Cores</th>
                          <th className="border p-2 text-left">Tensor Cores</th>
                          <th className="border p-2 text-left">Memory</th>
                          <th className="border p-2 text-left">FP32 Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border p-2">H100 SXM5</td>
                          <td className="border p-2">Hopper</td>
                          <td className="border p-2">16,896</td>
                          <td className="border p-2">528</td>
                          <td className="border p-2">80GB HBM3</td>
                          <td className="border p-2">67 TFLOPS</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border p-2">A100 SXM4</td>
                          <td className="border p-2">Ampere</td>
                          <td className="border p-2">6,912</td>
                          <td className="border p-2">432</td>
                          <td className="border p-2">80GB HBM2e</td>
                          <td className="border p-2">19.5 TFLOPS</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border p-2">A30</td>
                          <td className="border p-2">Ampere</td>
                          <td className="border p-2">3,584</td>
                          <td className="border p-2">224</td>
                          <td className="border p-2">24GB HBM2</td>
                          <td className="border p-2">10.3 TFLOPS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                <TabsContent value="workstation" className="mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-600 text-white">
                          <th className="border p-2 text-left">Model</th>
                          <th className="border p-2 text-left">Architecture</th>
                          <th className="border p-2 text-left">CUDA Cores</th>
                          <th className="border p-2 text-left">Tensor Cores</th>
                          <th className="border p-2 text-left">Memory</th>
                          <th className="border p-2 text-left">FP32 Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border p-2">RTX 6000</td>
                          <td className="border p-2">Ada Lovelace</td>
                          <td className="border p-2">18,176</td>
                          <td className="border p-2">568</td>
                          <td className="border p-2">48GB GDDR6</td>
                          <td className="border p-2">91.1 TFLOPS</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border p-2">RTX 5000</td>
                          <td className="border p-2">Ada Lovelace</td>
                          <td className="border p-2">12,800</td>
                          <td className="border p-2">400</td>
                          <td className="border p-2">32GB GDDR6</td>
                          <td className="border p-2">65.3 TFLOPS</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border p-2">RTX 4000</td>
                          <td className="border p-2">Ada Lovelace</td>
                          <td className="border p-2">7,168</td>
                          <td className="border p-2">224</td>
                          <td className="border p-2">20GB GDDR6</td>
                          <td className="border p-2">36.3 TFLOPS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                <TabsContent value="embedded" className="mt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-600 text-white">
                          <th className="border p-2 text-left">Model</th>
                          <th className="border p-2 text-left">Architecture</th>
                          <th className="border p-2 text-left">CUDA Cores</th>
                          <th className="border p-2 text-left">Tensor Cores</th>
                          <th className="border p-2 text-left">Memory</th>
                          <th className="border p-2 text-left">FP32 Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border p-2">Jetson AGX Orin</td>
                          <td className="border p-2">Ampere</td>
                          <td className="border p-2">2,048</td>
                          <td className="border p-2">64</td>
                          <td className="border p-2">32GB LPDDR5</td>
                          <td className="border p-2">275 TOPS</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border p-2">Jetson Orin NX</td>
                          <td className="border p-2">Ampere</td>
                          <td className="border p-2">1,024</td>
                          <td className="border p-2">32</td>
                          <td className="border p-2">16GB LPDDR5</td>
                          <td className="border p-2">100 TOPS</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border p-2">Jetson Nano</td>
                          <td className="border p-2">Maxwell</td>
                          <td className="border p-2">128</td>
                          <td className="border p-2">N/A</td>
                          <td className="border p-2">4GB LPDDR4</td>
                          <td className="border p-2">0.5 TFLOPS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Accelerate Your AI Journey?
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Contact our team of experts to find the right NVIDIA GPU solution for your machine learning and AI
                    workloads.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700">Contact Sales</Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-950">
                    Download Resources
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/nvidia-datacenter-gpus.png"
                  alt="NVIDIA Data Center"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
