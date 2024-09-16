import { StyleSheet } from "react-native";
import React from "react";

import AddVotesModal from "./add-votes";

import ExpandableFAB from "./expandable-fab";
import UploadModal from "./upload-modal";
import {
  CandidateEntity,
  useResultControllerUploadPinkSheetMutation,
} from "@/redux/api/openapi.generated";

interface ResultsTabViewProps {
  data: CandidateEntity[];
}

const ResultsTabView = ({ data }: ResultsTabViewProps) => {
  const { isAgent, pollingStation, currentUser } = useCurrentUser();
  const [selectedImage, setSelectedImage] = React.useState<Asset | undefined>();
  const [openUploadModal, setOpenUploadModal] = React.useState(false);

  const [uploadPinkSheet, { isLoading: isLoadingUploadPinkSheet }] =
    useResultControllerUploadPinkSheetMutation();

  const handleImagePicker = async () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      includeBase64: false,
    };

    await launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image picker error: ", response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setOpenUploadModal(true);
        setSelectedImage(response.assets?.[0]);
        console.log(
          "🚀 ~ ImagePicker.launchImageLibrary ~ imageUri:",
          imageUri
        );
      }
    });
  };

  const takePhoto = async () => {
    const options: CameraOptions = {
      mediaType: "photo",
      includeBase64: false,
      saveToPhotos: true,
      presentationStyle: "fullScreen",
    };

    await launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image picker error: ", response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setOpenUploadModal(true);
        setSelectedImage(response.assets?.[0]);
        console.log("🚀 ~ ImagePicker.launchCamera ~ imageUri:", imageUri);
      }
    });
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("electionType", data[0].type);
      formData.append(
        "pollingStationId",
        currentUser.user.pollingStation?.id as string as string
      );
      formData.append("pinkSheet", {
        uri: selectedImage?.uri as string,
        type: "image/jpeg",
        name: "pinkSheet.jpg",
      });

      const response = await uploadPinkSheet({
        uploadPinkSheetRequestDto:
          formData as unknown as UploadPinkSheetRequestDto,
      }).unwrap();
      console.log("🚀 ~ uploadImage ~ response", response);
      showInfo("Pink Sheet Uploaded Successfully");
      setOpenUploadModal(false);
      setSelectedImage(undefined);
    } catch (error) {
      console.log("🚀 ~ uploadImage ~ error", error);
      showError((error as { data: CreateManualResultResponseDto }).data.error);
    }
  };

  const [selectedCandidate, setSelectedCandidate] =
    React.useState<CandidateEntity>();
  const [votes, setVotes] = React.useState<CreateManualVoteRequestDto[]>([]);
  // console.log('🚀 ~ ResultsTabView ~ votes:', votes);

  const [createManualResults, { isLoading, isError }] =
    useResultControllerCreateManualResultMutation();

  const getCandidateVotes = (candidateId: string) => {
    return votes.find((v) => v.candidateId === candidateId)?.votes;
  };

  const handleSubmit = async () => {
    console.log("currentUser =>>", currentUser.user.pollingStation);
    try {
      const response = await createManualResults({
        createManualResultRequestDto: {
          electionType: CandidateType.PRESIDENTIAL,
          pollingStationId: currentUser.user.pollingStation?.id as string,
          rejectedVotes: 100,
          votes,
        },
      }).unwrap();
      console.log("🚀 ~ handleSubmit ~ result", response);
      showInfo("Submitted Successfully");
    } catch (error) {
      //       console.log('🚀 ~ handleSubmit ~ error', error);
      showError((error as { data: CreateManualResultResponseDto }).data.error);
    }
  };

  const isDataEmpty = isEmpty(data);

  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        background="transparent"
        marginX={2}
        marginTop={2}
        showsVerticalScrollIndicator={false}
      >
        {data.map((candidate, i) => (
          <Pressable
            key={i}
            rounded={4}
            onPress={() => setSelectedCandidate(candidate)}
            shadow={3}
            bgColor="white"
            px={2}
            py={4}
            my={1}
            maxW={getDim(1)}
          >
            <Box w="full">
              <HStack w="full" alignItems="center">
                <Center>
                  <Image
                    source={{ uri: candidate?.party?.logoUrl }}
                    alt="Party Logo"
                    resizeMode="cover"
                    borderRadius={100}
                    width={16}
                    height={16}
                    borderWidth={1}
                    borderColor={"gray.300"}
                  />
                </Center>
                <Center marginLeft={2}>
                  <Image
                    source={{ uri: candidate?.candidatePictureUrl }}
                    alt="Candidate Image Logo"
                    resizeMode="cover"
                    borderRadius={5}
                    width={16}
                    height={16}
                    borderWidth={1}
                    borderColor={"gray.300"}
                  />
                </Center>

                <VStack marginLeft={2}>
                  <Text
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {candidate?.fullName}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {getAcronym(candidate?.party?.name ?? "")}
                  </Text>
                  <Text italic bold fontSize="xs" color="green.600">
                    {getCandidateVotes(candidate.id) ?? "Tap to add votes"}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </Pressable>
        ))}

        <PrimaryButton my={4} onPress={handleSubmit}>
          <ActivityIndicator renderIf={isLoading} />
          <PrimaryButton.Text>Submit</PrimaryButton.Text>
        </PrimaryButton>
      </ScrollView>
      {/* <Pressable w="100%">
        <Fab
          renderInPortal={false}
          shadow={2}
          placement="bottom-right"
          onPress={handlePicker}
          // bottom={20}
          size="sm"
          icon={<Icon color="white" name="upload-file" size={24} />}
          label={<Text color="white" fontWeight="700">Upload Pink Sheet</Text>}


        />
      </Pressable> */}
      <ExpandableFAB takePhoto={takePhoto} pickImage={handleImagePicker} />

      <AddVotesModal
        show={!!selectedCandidate}
        onClose={() => setSelectedCandidate(undefined)}
        selectedCandidate={selectedCandidate}
        votes={votes}
        setVotes={setVotes}
      />
      <UploadModal
        show={openUploadModal}
        onClose={() => {
          setOpenUploadModal(false);
          setSelectedImage(undefined);
        }}
        image={selectedImage?.uri as string}
        uploadImage={uploadImage}
        loading={isLoadingUploadPinkSheet}
      />
    </>
  );
};

export default ResultsTabView;

const styles = StyleSheet.create({});
