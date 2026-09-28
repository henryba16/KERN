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
            <Navbar />
            <main>
                <h2>Xin chào!</h2>
                <p>This is my first website.</p>

                <button onClick={signInWithDiscord}>
                    Sigin with Discord
                </button>
            </main>
        </>
    );
}