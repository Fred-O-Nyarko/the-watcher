import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Slot } from "expo-router";

const AuthLayout = () => {
  return (
    <SafeAreaView>
      <ScrollView
        className="w-full h-full px-2"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack className="w-full h-full flex-grow justify-center">
          <VStack className="md:items-center md:justify-center flex-1 w-full  p-9 md:gap-10 gap-16 md:m-auto md:w-1/2 h-full">
            <Slot />
          </VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthLayout;
