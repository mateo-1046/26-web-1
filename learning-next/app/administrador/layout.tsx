
import { AppSidebar } from "@/components/ui/app-siderbar-copy"

export default function administradorLayout({ children }: {
    children: React.ReactNode
}){
    return (
            <main>
                <h1>Administrador</h1>
                <AppSidebar />
                {children}
                
            </main>
    )
}