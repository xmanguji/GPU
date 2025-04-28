import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function GPUExplained() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-12 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to home</span>
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Understanding GPUs in Machine Learning</h1>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {/* What is a GPU section */}
            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">What is a GPU?</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  A Graphics Processing Unit (GPU) is a specialized electronic circuit originally designed to accelerate
                  computer graphics and image processing. Unlike Central Processing Units (CPUs) which have a few cores
                  optimized for sequential processing, GPUs have a massively parallel architecture consisting of
                  thousands of smaller, more efficient cores designed for handling multiple tasks simultaneously.
                </p>
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-semibold">CPU vs GPU Architecture</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">CPU</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 pt-0">
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>Few Cores (4-64)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>High Clock Speed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>Complex Control Logic</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>Large Cache Memory</span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">GPU</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 pt-0">
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>Many Cores (1000s)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>Moderate Clock Speed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>Simple Control Logic</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-green-600" />
                          <span>High Memory Bandwidth</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/gpu-vs-cpu-architecture.png"
                  alt="GPU vs CPU Architecture"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </section>

            {/* Why GPUs are Essential section */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Why GPUs are Essential for Machine Learning and Deep Learning
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Parallel Processing Power</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Deep learning involves matrix multiplications and vector operations on massive datasets. GPUs
                      excel at these parallel computations with 10,000+ cores compared to 8-64 cores in high-end CPUs,
                      providing 10-100x speedup for training neural networks.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Training Time Reduction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      A deep learning model that takes 1 week to train on a GPU might take months on a CPU. Faster
                      training enables more experimentation and model iterations, accelerating research and development.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Memory Bandwidth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      High-end GPUs provide 1-2 TB/s memory bandwidth (vs 50-100 GB/s for CPUs), allowing faster data
                      transfer between memory and processing units. This is critical for handling the large datasets
                      used in deep learning.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Specialized Hardware</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Modern GPUs include Tensor Cores for matrix multiplication, FP16/INT8 support for faster
                      calculations, and large video memory (VRAM) to hold large models and batches of training data.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Real-World Impact section */}
            <section className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Real-World Impact</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  The impact of GPUs on machine learning and deep learning is transformative, enabling breakthroughs
                  that would be impossible with CPUs alone.
                </p>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Training Time Comparison</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">ResNet-50 on CPU</span>
                      <span className="text-gray-500">~1 week</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">ResNet-50 on Single GPU</span>
                      <span className="text-gray-500">~1 day</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">ResNet-50 on Multi-GPU</span>
                      <span className="text-gray-500">~hours</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">Example: Training a Large Language Model</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Training GPT-3 (175 billion parameters) would take decades on CPUs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>With thousands of GPUs, it can be trained in months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>
                        NVIDIA's H100 GPUs can be 30x faster than previous generations for certain AI workloads
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/training-time-comparison.png"
                  alt="GPU Training Time Comparison"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </section>

            {/* CUDA section */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">CUDA: The Bridge Between GPUs and ML Frameworks</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    NVIDIA's CUDA (Compute Unified Device Architecture) is a parallel computing platform and programming
                    model that enables developers to use NVIDIA GPUs for general-purpose processing.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Provides APIs for accessing GPU capabilities from programming languages like Python</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Powers popular deep learning frameworks (TensorFlow, PyTorch, JAX)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Includes libraries optimized for deep learning (cuDNN, cuBLAS)</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Link href="/#cuda">Learn More About CUDA</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/cuda-ml-frameworks.png"
                    alt="CUDA and ML Frameworks"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </section>

            {/* When to Use GPUs vs CPUs */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">When to Use GPUs vs CPUs</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-green-600 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-green-600 rounded-full flex items-center justify-center text-white">
                        GPU
                      </div>
                      Use GPUs for:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                      <span>Training deep neural networks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                      <span>Computer vision applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                      <span>Natural Language Processing (NLP)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-green-600" />
                      <span>Large-scale data processing</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-gray-600 rounded-full flex items-center justify-center text-white">
                        CPU
                      </div>
                      Use CPUs for:
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                      <span>Data preprocessing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                      <span>Small models with limited parallelism</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                      <span>Deployment of simple models</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                      <span>Tasks with sequential processing requirements</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* The Future section */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">The Future: Specialized AI Accelerators</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                While GPUs dominate ML/DL today, the landscape is evolving with specialized hardware. However, GPUs
                remain the most versatile and widely supported hardware accelerator for machine learning and deep
                learning, offering the best combination of performance, flexibility, and software ecosystem support.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>TPUs</CardTitle>
                    <CardDescription>Tensor Processing Units</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Google's custom ASICs designed specifically for machine learning workloads, optimized for
                      TensorFlow operations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>NPUs</CardTitle>
                    <CardDescription>Neural Processing Units</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Specialized chips from companies like Apple and Qualcomm, designed for on-device AI processing
                      with low power consumption.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Custom AI Chips</CardTitle>
                    <CardDescription>Emerging Solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Specialized hardware from startups and established companies targeting specific AI workloads or
                      efficiency metrics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA section */}
            <section className="bg-black text-white rounded-lg p-8 md:p-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">Ready to Accelerate Your AI Projects?</h2>
                  <p className="text-gray-300">
                    Explore NVIDIA's comprehensive portfolio of GPUs designed specifically for machine learning and deep
                    learning workloads.
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row pt-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Link href="/#products">Explore Products</Link>
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-950">
                      <Link href="/#specs">View Specifications</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/ai-acceleration.png"
                    alt="AI Acceleration with NVIDIA"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
