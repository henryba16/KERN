"use client";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/client";

export default function SignIn() {
    async function signInWithDiscord() {
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithOAuth({
            provider: "discord",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            console.error(error);
        }
    }

    return (
        <>
            <a href="/"><Navbar/></a>
            <main>
                <div className="signin-box">
                    <h2>Sign In</h2>

                    <button onClick={signInWithDiscord}>
                        Sigin with Discord
                    </button>
                </div>
            </main>
        </>
    );
}