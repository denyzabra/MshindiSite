import { Card } from "@/components/ui/card";
import { User, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Amia Nancy",
    position: "Operations Manager",
    email: "nancyamian354@gmail.com",
    phone: "+256753989949",
  },
  {
    id: 2,
    name: "Odong Gilbert",
    position: "Logistics Coordinator",
    email: "gilbertodongo02@gmail.com",
    phone: "+256756504958",
  },
];

export default function Teams() {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block">
            <div className="h-1 w-16 bg-secondary mb-4"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground" data-testid="text-teams-heading">
              Our Team
            </h2>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team behind Mshindi Enterprises Limited
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className="p-8 hover-elevate active-elevate-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`card-team-${member.id}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <User className="w-16 h-16 text-white" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium">Photo Coming Soon</p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-secondary font-semibold mb-6">
                  {member.position}
                </p>
                
                <div className="w-full space-y-3">
                  {member.email ? (
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      data-testid={`link-email-${member.id}`}
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-3 text-muted-foreground/40">
                      <Mail className="w-5 h-5" />
                      <span className="text-sm italic">Email coming soon</span>
                    </div>
                  )}
                  {member.phone ? (
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      data-testid={`link-phone-${member.id}`}
                    >
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{member.phone}</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-3 text-muted-foreground/40">
                      <Phone className="w-5 h-5" />
                      <span className="text-sm italic">Phone coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">Join Our Team</h3>
            <p className="text-lg opacity-90 mb-6">
              We're always looking for talented individuals to join our growing team
            </p>
            <a 
              href="mailto:mshindienterprisescoltd@gmail.com?subject=Career Inquiry"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-join-team"
            >
              Get in Touch
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
