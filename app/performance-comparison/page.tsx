import Image from "next/image"
import Link from "next/link"
import { BarChart3, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function PerformanceComparison() {
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
                    GPU Performance Comparison
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    See the real-world performance differences between NVIDIA GPU models across various AI and machine
                    learning workloads.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Link href="#benchmarks">View Benchmarks</Link>
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-950">
                    <Link href="#real-world">Real-World Examples</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/performance-comparison-hero.png"
                  alt="GPU Performance Comparison"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="benchmarks" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Performance Benchmarks</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare the raw performance metrics of different NVIDIA GPU models across key AI workloads.
                </p>
              </div>
            </div>

            <Tabs defaultValue="training" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
                <TabsTrigger value="training">Training</TabsTrigger>
                <TabsTrigger value="inference">Inference</TabsTrigger>
                <TabsTrigger value="mixed">Mixed Precision</TabsTrigger>
                <TabsTrigger value="memory">Memory</TabsTrigger>
                <TabsTrigger value="price">Price</TabsTrigger>
              </TabsList>

              <TabsContent value="training" className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">ResNet-50 Training (images/second)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">3,500 img/s</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">2,400 img/s</span>
                      </div>
                      <Progress value={68} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">1,800 img/s</span>
                      </div>
                      <Progress value={51} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">1,200 img/s</span>
                      </div>
                      <Progress value={34} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">900 img/s</span>
                      </div>
                      <Progress value={26} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">120 img/s</span>
                      </div>
                      <Progress value={3.4} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">BERT Large Training (samples/second)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">720 samples/s</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">480 samples/s</span>
                      </div>
                      <Progress value={67} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">320 samples/s</span>
                      </div>
                      <Progress value={44} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">210 samples/s</span>
                      </div>
                      <Progress value={29} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">160 samples/s</span>
                      </div>
                      <Progress value={22} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">25 samples/s</span>
                      </div>
                      <Progress value={3.5} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="inference" className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">ResNet-50 Inference (images/second)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">28,000 img/s</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">20,000 img/s</span>
                      </div>
                      <Progress value={71} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">15,000 img/s</span>
                      </div>
                      <Progress value={54} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">10,000 img/s</span>
                      </div>
                      <Progress value={36} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">7,500 img/s</span>
                      </div>
                      <Progress value={27} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">1,200 img/s</span>
                      </div>
                      <Progress value={4.3} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">BERT Large Inference (queries/second)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">3,200 queries/s</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">2,400 queries/s</span>
                      </div>
                      <Progress value={75} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">1,600 queries/s</span>
                      </div>
                      <Progress value={50} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">1,000 queries/s</span>
                      </div>
                      <Progress value={31} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">750 queries/s</span>
                      </div>
                      <Progress value={23} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">120 queries/s</span>
                      </div>
                      <Progress value={3.8} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mixed" className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">Mixed Precision Training Speedup (vs FP32)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">3.2x speedup</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">2.8x speedup</span>
                      </div>
                      <Progress value={88} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">2.5x speedup</span>
                      </div>
                      <Progress value={78} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">2.2x speedup</span>
                      </div>
                      <Progress value={69} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">2.0x speedup</span>
                      </div>
                      <Progress value={63} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">1.0x speedup</span>
                      </div>
                      <Progress value={31} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="memory" className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">Memory Capacity Comparison</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">80 GB HBM3</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">80 GB HBM2e</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">24 GB GDDR6X</span>
                      </div>
                      <Progress value={30} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">24 GB GDDR6X</span>
                      </div>
                      <Progress value={30} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">12 GB GDDR6X</span>
                      </div>
                      <Progress value={15} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">System RAM: 256 GB DDR5</span>
                      </div>
                      <Progress value={320} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">Memory Bandwidth (GB/s)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">3,000 GB/s</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">2,039 GB/s</span>
                      </div>
                      <Progress value={68} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">1,008 GB/s</span>
                      </div>
                      <Progress value={34} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">936 GB/s</span>
                      </div>
                      <Progress value={31} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">504 GB/s</span>
                      </div>
                      <Progress value={17} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">100 GB/s</span>
                      </div>
                      <Progress value={3.3} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="price" className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">Approximate Retail Price (USD)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">$30,000</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">$10,000</span>
                      </div>
                      <Progress value={33} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">$1,599</span>
                      </div>
                      <Progress value={5.3} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">$1,499</span>
                      </div>
                      <Progress value={5} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">$599</span>
                      </div>
                      <Progress value={2} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">$1,999</span>
                      </div>
                      <Progress value={6.7} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center">Price-Performance Ratio ($/TFLOPS)</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="font-medium">H100</span>
                        </div>
                        <span className="font-medium">$447 per TFLOPS</span>
                      </div>
                      <Progress value={60} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-medium">A100</span>
                        </div>
                        <span className="font-medium">$513 per TFLOPS</span>
                      </div>
                      <Progress value={69} className="h-3 bg-gray-200" indicatorClassName="bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium">RTX 4090</span>
                        </div>
                        <span className="font-medium">$42 per TFLOPS</span>
                      </div>
                      <Progress value={5.7} className="h-3 bg-gray-200" indicatorClassName="bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                          <span className="font-medium">RTX 3090</span>
                        </div>
                        <span className="font-medium">$48 per TFLOPS</span>
                      </div>
                      <Progress value={6.5} className="h-3 bg-gray-200" indicatorClassName="bg-green-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                          <span className="font-medium">RTX 4070</span>
                        </div>
                        <span className="font-medium">$30 per TFLOPS</span>
                      </div>
                      <Progress value={4} className="h-3 bg-gray-200" indicatorClassName="bg-green-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="font-medium">CPU (32-core)</span>
                        </div>
                        <span className="font-medium">$740 per TFLOPS</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Maximum Model Size Capacity
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how different GPU memory capacities translate to maximum model sizes for popular AI workloads.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Large Language Models</CardTitle>
                  <CardDescription>Maximum model size in billions of parameters</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">H100 (80GB)</span>
                      <span className="font-medium text-green-600">70B parameters</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">A100 (80GB)</span>
                      <span className="font-medium text-green-600">70B parameters</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4090 (24GB)</span>
                      <span className="font-medium text-green-600">13B parameters</span>
                    </div>
                    <Progress value={19} className="h-2 bg-gray-200" indicatorClassName="bg-green-400" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 3090 (24GB)</span>
                      <span className="font-medium text-green-600">13B parameters</span>
                    </div>
                    <Progress value={19} className="h-2 bg-gray-200" indicatorClassName="bg-green-300" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4070 (12GB)</span>
                      <span className="font-medium text-green-600">7B parameters</span>
                    </div>
                    <Progress value={10} className="h-2 bg-gray-200" indicatorClassName="bg-green-200" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">CPU (256GB RAM)</span>
                      <span className="font-medium text-gray-600">175B+ parameters*</span>
                    </div>
                    <Progress value={250} className="h-2 bg-gray-200" indicatorClassName="bg-gray-400" />
                    <p className="text-xs text-gray-500 mt-2">
                      *CPU can load larger models but with extremely slow inference speed
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Computer Vision Models</CardTitle>
                  <CardDescription>Maximum batch size for inference</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">H100 (80GB)</span>
                      <span className="font-medium text-green-600">1024 images</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">A100 (80GB)</span>
                      <span className="font-medium text-green-600">1024 images</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4090 (24GB)</span>
                      <span className="font-medium text-green-600">256 images</span>
                    </div>
                    <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-green-400" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 3090 (24GB)</span>
                      <span className="font-medium text-green-600">256 images</span>
                    </div>
                    <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-green-300" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4070 (12GB)</span>
                      <span className="font-medium text-green-600">128 images</span>
                    </div>
                    <Progress value={12.5} className="h-2 bg-gray-200" indicatorClassName="bg-green-200" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">CPU (256GB RAM)</span>
                      <span className="font-medium text-gray-600">2048+ images*</span>
                    </div>
                    <Progress value={200} className="h-2 bg-gray-200" indicatorClassName="bg-gray-400" />
                    <p className="text-xs text-gray-500 mt-2">
                      *CPU can process larger batches but at significantly lower speeds
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Diffusion Models</CardTitle>
                  <CardDescription>Maximum resolution for image generation</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">H100 (80GB)</span>
                      <span className="font-medium text-green-600">4096 × 4096 px</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">A100 (80GB)</span>
                      <span className="font-medium text-green-600">4096 × 4096 px</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4090 (24GB)</span>
                      <span className="font-medium text-green-600">2048 × 2048 px</span>
                    </div>
                    <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-green-400" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 3090 (24GB)</span>
                      <span className="font-medium text-green-600">2048 × 2048 px</span>
                    </div>
                    <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-green-300" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4070 (12GB)</span>
                      <span className="font-medium text-green-600">1024 × 1024 px</span>
                    </div>
                    <Progress value={6.25} className="h-2 bg-gray-200" indicatorClassName="bg-green-200" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">CPU (256GB RAM)</span>
                      <span className="font-medium text-gray-600">8192 × 8192 px*</span>
                    </div>
                    <Progress value={400} className="h-2 bg-gray-200" indicatorClassName="bg-gray-400" />
                    <p className="text-xs text-gray-500 mt-2">
                      *CPU can handle larger resolutions but generation takes hours instead of seconds
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cost-Benefit Analysis</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Compare the value proposition of different GPU options for various AI workloads.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Price per GB of Memory</CardTitle>
                  <CardDescription>Cost efficiency of memory capacity</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">H100 (80GB)</span>
                      <span className="font-medium text-green-600">$375/GB</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">A100 (80GB)</span>
                      <span className="font-medium text-green-600">$125/GB</span>
                    </div>
                    <Progress value={33.3} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4090 (24GB)</span>
                      <span className="font-medium text-green-600">$67/GB</span>
                    </div>
                    <Progress value={17.9} className="h-2 bg-gray-200" indicatorClassName="bg-green-400" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 3090 (24GB)</span>
                      <span className="font-medium text-green-600">$62/GB</span>
                    </div>
                    <Progress value={16.5} className="h-2 bg-gray-200" indicatorClassName="bg-green-300" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4070 (12GB)</span>
                      <span className="font-medium text-green-600">$50/GB</span>
                    </div>
                    <Progress value={13.3} className="h-2 bg-gray-200" indicatorClassName="bg-green-200" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">CPU (256GB RAM)</span>
                      <span className="font-medium text-gray-600">$8/GB</span>
                    </div>
                    <Progress value={2.1} className="h-2 bg-gray-200" indicatorClassName="bg-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Training Cost Efficiency</CardTitle>
                  <CardDescription>Cost per 1000 images/second (ResNet-50)</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">H100</span>
                      <span className="font-medium text-green-600">$8,571</span>
                    </div>
                    <Progress value={51.4} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">A100</span>
                      <span className="font-medium text-green-600">$4,167</span>
                    </div>
                    <Progress value={25} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4090</span>
                      <span className="font-medium text-green-600">$888</span>
                    </div>
                    <Progress value={5.3} className="h-2 bg-gray-200" indicatorClassName="bg-green-400" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 3090</span>
                      <span className="font-medium text-green-600">$1,249</span>
                    </div>
                    <Progress value={7.5} className="h-2 bg-gray-200" indicatorClassName="bg-green-300" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4070</span>
                      <span className="font-medium text-green-600">$666</span>
                    </div>
                    <Progress value={4} className="h-2 bg-gray-200" indicatorClassName="bg-green-200" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">CPU (32-core)</span>
                      <span className="font-medium text-gray-600">$16,658</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Total Cost of Ownership</CardTitle>
                  <CardDescription>3-year TCO including power consumption</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">H100 (700W)</span>
                      <span className="font-medium text-green-600">$33,680</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">A100 (400W)</span>
                      <span className="font-medium text-green-600">$12,100</span>
                    </div>
                    <Progress value={35.9} className="h-2 bg-gray-200" indicatorClassName="bg-green-500" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4090 (450W)</span>
                      <span className="font-medium text-green-600">$3,770</span>
                    </div>
                    <Progress value={11.2} className="h-2 bg-gray-200" indicatorClassName="bg-green-400" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 3090 (350W)</span>
                      <span className="font-medium text-green-600">$3,340</span>
                    </div>
                    <Progress value={9.9} className="h-2 bg-gray-200" indicatorClassName="bg-green-300" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">RTX 4070 (200W)</span>
                      <span className="font-medium text-green-600">$1,750</span>
                    </div>
                    <Progress value={5.2} className="h-2 bg-gray-200" indicatorClassName="bg-green-200" />

                    <div className="flex items-center justify-between">
                      <span className="font-medium">CPU (280W)</span>
                      <span className="font-medium text-gray-600">$4,430</span>
                    </div>
                    <Progress value={13.2} className="h-2 bg-gray-200" indicatorClassName="bg-gray-400" />
                    <p className="text-xs text-gray-500 mt-2">
                      Includes hardware cost, power consumption at $0.15/kWh, and cooling overhead
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="real-world" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real-World Examples</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how different NVIDIA GPUs perform in practical AI and machine learning applications.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Image Processing</CardTitle>
                  <CardDescription>Real-time style transfer on 4K images</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Image
                      src="/original-image.png"
                      alt="Original Image"
                      width={250}
                      height={200}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                    <Image
                      src="/processed-image.png"
                      alt="Processed Image"
                      width={250}
                      height={200}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">H100</span>
                      <span className="font-medium text-green-600">12ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">A100</span>
                      <span className="font-medium text-green-600">18ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 4090</span>
                      <span className="font-medium text-green-600">24ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 3090</span>
                      <span className="font-medium text-green-600">35ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 4070</span>
                      <span className="font-medium text-green-600">42ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">CPU (32-core)</span>
                      <span className="font-medium text-gray-600">320ms</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">View Demo</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Large Language Models</CardTitle>
                  <CardDescription>Text generation with 7B parameter model</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm">
                    <p className="font-medium mb-2">Prompt:</p>
                    <p className="text-gray-700 mb-4">Explain quantum computing in simple terms.</p>
                    <p className="font-medium mb-2">Generated Response:</p>
                    <p className="text-gray-700">
                      Quantum computing is like having a super-fast calculator that can try many answers at once instead
                      of one at a time...
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">H100</span>
                      <span className="font-medium text-green-600">15 tokens/s</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">A100</span>
                      <span className="font-medium text-green-600">12 tokens/s</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 4090</span>
                      <span className="font-medium text-green-600">8 tokens/s</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 3090</span>
                      <span className="font-medium text-green-600">5 tokens/s</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 4070</span>
                      <span className="font-medium text-green-600">4 tokens/s</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">CPU (32-core)</span>
                      <span className="font-medium text-gray-600">0.8 tokens/s</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Try Interactive Demo</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Video Processing</CardTitle>
                  <CardDescription>Real-time object detection in 4K video</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative mb-6">
                    <Image
                      src="/video-processing.png"
                      alt="Video Processing"
                      width={400}
                      height={225}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/50 p-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">H100</span>
                      <span className="font-medium text-green-600">120 FPS</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">A100</span>
                      <span className="font-medium text-green-600">90 FPS</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 4090</span>
                      <span className="font-medium text-green-600">75 FPS</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 3090</span>
                      <span className="font-medium text-green-600">60 FPS</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">RTX 4070</span>
                      <span className="font-medium text-green-600">45 FPS</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">CPU (32-core)</span>
                      <span className="font-medium text-gray-600">8 FPS</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Watch Demo</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Case Studies</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn how organizations achieved significant performance improvements by upgrading their GPU
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <CardTitle>Training Time Reduction</CardTitle>
                  </div>
                  <CardDescription>AI Research Lab</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <p className="text-gray-500">
                      An AI research lab reduced their model training time from 12 days to just 8 hours by upgrading
                      from CPU-based training to a cluster of NVIDIA A100 GPUs.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Before (CPU Cluster)</span>
                        <span className="font-medium">12 days</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                      <div className="flex items-center justify-between mt-4 mb-2">
                        <span className="font-medium">After (A100 Cluster)</span>
                        <span className="font-medium">8 hours</span>
                      </div>
                      <Progress value={2.8} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                      <div className="mt-4 text-center">
                        <span className="font-bold text-green-600">36x Faster</span>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      "The dramatic reduction in training time allowed our researchers to iterate on models much more
                      quickly, leading to breakthrough results in half the time." - Research Director
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Read Full Case Study</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    <CardTitle>Inference Throughput</CardTitle>
                  </div>
                  <CardDescription>Financial Services Company</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <p className="text-gray-500">
                      A financial services company increased their fraud detection system's throughput by 15x while
                      reducing latency by 80% by implementing NVIDIA T4 GPUs.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Before (CPU)</span>
                        <span className="font-medium">200 transactions/s</span>
                      </div>
                      <Progress value={6.7} className="h-3 bg-gray-200" indicatorClassName="bg-gray-400" />
                      <div className="flex items-center justify-between mt-4 mb-2">
                        <span className="font-medium">After (T4 GPUs)</span>
                        <span className="font-medium">3,000 transactions/s</span>
                      </div>
                      <Progress value={100} className="h-3 bg-gray-200" indicatorClassName="bg-green-600" />
                      <div className="mt-4 text-center">
                        <span className="font-bold text-green-600">15x Throughput</span>
                      </div>
                    </div>
                    <p className="text-gray-500">
                      "The increased throughput allowed us to analyze 100% of transactions in real-time instead of
                      sampling, significantly reducing fraud losses." - CTO
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Read Full Case Study</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Find the Right GPU for Your Workload
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our performance comparison tools help you select the optimal NVIDIA GPU solution for your specific
                    AI and machine learning needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Link href="/#products">Explore Products</Link>
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-950">
                    <Link href="/gpu-explained">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/gpu-selection-guide.png"
                  alt="GPU Selection Guide"
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
