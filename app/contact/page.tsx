import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-green-100 text-green-800">📞 Contact Us</Badge>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about our ESG data platform? We're here to help.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Multiple ways to reach our team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">hello@esganalytics.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}