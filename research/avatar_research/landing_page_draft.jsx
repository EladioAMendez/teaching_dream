import './App.css'
import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { 
  Star, 
  Play, 
  CheckCircle, 
  MessageCircle, 
  TrendingUp, 
  Heart, 
  Trophy, 
  Target,
  Brain,
  Clock,
  Gift,
  Shield,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 14,
    minutes: 32,
    seconds: 45
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
    alert('Welcome to StudyVoice! Check your email for next steps toward FTCE success.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] bg-clip-text text-transparent">
                StudyVoice
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-[#4ECDC4] px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-700 hover:text-[#4ECDC4] px-3 py-2 rounded-md text-sm font-medium transition-colors">Success Stories</a>
                <a href="#pricing" className="text-gray-700 hover:text-[#4ECDC4] px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
                <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] hover:from-[#FF5252] hover:to-[#42A5F5] text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#4ECDC4] p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="text-gray-700 hover:text-[#4ECDC4] block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#4ECDC4] block px-3 py-2 rounded-md text-base font-medium">Success Stories</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#4ECDC4] block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
              <Button className="w-full mt-2 bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] hover:from-[#FF5252] hover:to-[#42A5F5] text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B6B] via-[#FF8E53] to-[#45B7D1] py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your FTCE Prep from 
                <span className="block text-[#FFD93D]">Overwhelming to Effortless</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Stop staring at study guides that make your brain go blank. StudyVoice turns exam prep into natural conversations you can have anywhere – while making coffee, folding laundry, or driving to student teaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-[#1E293B] hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold">
                  Start Your Free Trial Today
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
              <p className="text-white/80 text-sm">
                No credit card required • Join 2,847 future teachers who are already studying smarter
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-[#4ECDC4] to-[#45B7D1] rounded-2xl">
                  <div className="text-center text-white">
                    <MessageCircle size={64} className="mx-auto mb-4" />
                    <div className="text-lg font-semibold">AI Voice Tutor</div>
                    <div className="text-sm opacity-80">Ready to help you succeed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B] mb-6">
              Why StudyVoice Works When Everything Else Doesn't
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="text-[#FF8E53]" size={32} />,
                title: "Turn Dead Time Into Study Time",
                description: "Quiz yourself while brushing teeth, review concepts during your commute, or practice questions while doing laundry. Your AI tutor is always ready when you are."
              },
              {
                icon: <Brain className="text-[#4ECDC4]" size={32} />,
                title: "Learn Through Conversation, Not Memorization",
                description: "Stop feeling stupid when you can't remember facts. Our AI helps you understand patterns and connect concepts through natural dialogue that builds real confidence."
              },
              {
                icon: <Target className="text-[#667EEA]" size={32} />,
                title: "Focus on What You Actually Need",
                description: "Skip the one-size-fits-all approach. Your AI tutor identifies your weak spots and adapts in real-time, so you're not wasting precious time on stuff you already know."
              },
              {
                icon: <Heart className="text-[#6BCF7F]" size={32} />,
                title: "Build Confidence, Not Stress",
                description: "No judgment, no pressure, just patient guidance. Practice until concepts click, ask 'dumb' questions without embarrassment, and actually enjoy studying for once."
              },
              {
                icon: <Trophy className="text-[#FFD93D]" size={32} />,
                title: "Pass on Your First Try",
                description: "94% of our users pass the FTCE on their first attempt. Join thousands of teachers who went from overwhelmed to certified with confidence."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1E293B]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F1F5F9] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B] mb-6">
              Real Teachers, Real Results
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                title: "Elementary Education, Miami-Dade",
                quote: "I was that student who bought every study guide and never opened them. StudyVoice let me study during my 20-minute lunch breaks and while walking my dog. I actually looked forward to studying for the first time in my life.",
                rating: 5
              },
              {
                name: "Marcus Williams",
                title: "Middle School Math, Orlando",
                quote: "After failing the FTCE twice, I was ready to give up on teaching. StudyVoice helped me understand not just what to memorize, but WHY certain answers were correct. Passed with flying colors on my third try.",
                rating: 5
              },
              {
                name: "Jessica Rodriguez",
                title: "Special Education, Tampa",
                quote: "The anxiety was killing me. Every time I opened a study book, my mind went blank. Having conversations with my AI tutor felt natural and actually helped me retain information. I felt prepared walking into that exam room.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D]" />
                    ))}
                  </div>
                  <CardDescription className="text-[#667EEA] font-medium text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-[#1E293B]">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Badge variant="secondary" className="bg-[#6BCF7F] text-white text-lg px-6 py-2">
              ⭐ 4.9/5 stars from 2,847 teachers • Featured in Education Week
            </Badge>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B] mb-6">
              See How It Works
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Watch how Jessica transforms her morning routine into productive study time
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#4ECDC4] to-[#45B7D1] rounded-2xl p-8 text-white">
                <div className="flex items-center justify-center h-64 bg-white/10 rounded-xl">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    <Play className="mr-2" size={24} />
                    Watch 2-Minute Demo
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <Tabs defaultValue="conversations" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                  <TabsTrigger value="conversations">Voice</TabsTrigger>
                  <TabsTrigger value="progress">Progress</TabsTrigger>
                  <TabsTrigger value="flexible">Flexible</TabsTrigger>
                  <TabsTrigger value="feedback">Feedback</TabsTrigger>
                </TabsList>
                
                <TabsContent value="conversations" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#4ECDC4]">Natural Learning Dialogue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Ask questions, get explanations, and practice scenarios through voice conversations that feel like talking to a knowledgeable friend.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="progress" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#45B7D1]">Know Exactly Where You Stand</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Visual progress indicators show your mastery level across all FTCE domains, so you know when you're ready to take the exam.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="flexible" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#FF8E53]">Study Your Way</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Voice-only for hands-free learning, text mode for quiet environments, or mixed mode for the best of both worlds.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="feedback" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#6BCF7F]">Learn from Every Mistake</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Get immediate explanations for wrong answers, understand why correct answers work, and build pattern recognition that sticks.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#764ABC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Stop Procrastinating and Start Succeeding?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 2,847 future teachers who chose confidence over anxiety. Your teaching career is waiting – don't let the FTCE be the thing that stops you.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email to start your free trial"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-white text-[#1E293B] placeholder:text-gray-500"
                required
              />
              <Button type="submit" size="lg" className="bg-white text-[#1E293B] hover:bg-gray-100 font-semibold">
                Start My Free Trial
              </Button>
            </div>
          </form>
          
          <p className="text-white/80 text-sm mt-4">
            ✓ No credit card required ✓ Cancel anytime ✓ 14-day free trial
          </p>
        </div>
      </section>

      {/* Urgency/Offer Section */}
      <section className="py-4 bg-[#F59E0B] text-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Gift size={24} />
                <span className="font-semibold">Limited Time: Get 2 Extra Weeks FREE when you start your trial this week</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span>This offer expires in:</span>
                <div className="flex gap-2">
                  <div className="bg-white/20 px-2 py-1 rounded">{timeLeft.days}d</div>
                  <div className="bg-white/20 px-2 py-1 rounded">{timeLeft.hours}h</div>
                  <div className="bg-white/20 px-2 py-1 rounded">{timeLeft.minutes}m</div>
                  <div className="bg-white/20 px-2 py-1 rounded">{timeLeft.seconds}s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B] mb-6">
              Questions? We've Got Answers
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How is this different from other FTCE prep materials?",
                answer: "Traditional study guides require you to sit down and focus for hours at a time. StudyVoice works with your busy life – you can study while doing other things, get personalized help when you're stuck, and actually enjoy the process. Plus, our AI adapts to your learning style instead of forcing you into a one-size-fits-all approach."
              },
              {
                question: "I'm not good with technology. Is this complicated to use?",
                answer: "Not at all! If you can have a conversation, you can use StudyVoice. Just talk to your phone like you're talking to a friend. No complicated apps to learn or confusing interfaces to navigate."
              },
              {
                question: "What if I fail the FTCE even after using StudyVoice?",
                answer: "We're so confident in our approach that we offer a pass guarantee. If you complete our recommended study plan and don't pass, we'll refund your subscription and give you free access until you do pass."
              },
              {
                question: "How much time do I need to study each day?",
                answer: "Most of our successful students spend 15-30 minutes per day with StudyVoice. Because you can study while doing other things, it doesn't feel like you're adding more to your already packed schedule."
              },
              {
                question: "Is my data secure and private?",
                answer: "Absolutely. We use bank-level encryption and never share your personal information. Your study sessions are private, and you can delete your data at any time."
              },
              {
                question: "Can I use this on my phone?",
                answer: "Yes! StudyVoice works on any device with internet access. Most students love using it on their phones because they can study anywhere, anytime."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-[#1E293B] font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#45B7D1] to-[#667EEA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Your Teaching Dreams Are One Decision Away
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stop letting the FTCE be the barrier between you and the classroom where you belong. Thousands of teachers have already made the choice to study smarter, not harder.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 text-white">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#6BCF7F]" size={24} />
              <span>Study anywhere, anytime – no more excuses</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#6BCF7F]" size={24} />
              <span>Build real confidence, not just memorized facts</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#6BCF7F]" size={24} />
              <span>Join 94% of our users who pass on their first try</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#6BCF7F]" size={24} />
              <span>14-day free trial with no risk</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-white text-[#1E293B] placeholder:text-gray-500"
                required
              />
              <Button type="submit" size="lg" className="bg-[#6BCF7F] hover:bg-[#5ABE6F] text-white font-semibold">
                Start My Free Trial Now
              </Button>
            </div>
          </form>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 text-white mb-2">
              <Heart className="text-[#6BCF7F]" size={20} />
              <span className="font-semibold">Pass Guarantee</span>
            </div>
            <p className="text-white/90 text-sm">
              We're so confident you'll succeed, if you don't pass after completing our program, we'll refund everything and keep helping you for free.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#45B7D1] bg-clip-text text-transparent mb-4">
                StudyVoice
              </div>
              <p className="text-gray-400 text-sm">
                Transforming FTCE prep through AI-powered voice conversations.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 StudyVoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

