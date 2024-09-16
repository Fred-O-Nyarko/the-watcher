import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import {
  CandidateEntity,
  CreateManualVoteRequestDto,
} from "@/redux/api/openapi.generated";
import { useRef, useState } from "react";

export interface AddVotesModalProps {
  show: boolean;
  onClose: () => void;
  votes: CreateManualVoteRequestDto[];
  setVotes: (votes: CreateManualVoteRequestDto[]) => void;
  selectedCandidate?: CandidateEntity;
}

const AddVotesModal = ({
  show,
  onClose,
  votes,
  setVotes,
  selectedCandidate,
}: AddVotesModalProps) => {
  const [voteCount, setVoteCount] = useState<number | undefined>(
    () => votes.find((v) => v.candidateId === selectedCandidate?.id)?.votes || 0
  );

  const addVotes = () => {
    // check if candidate already exists in votes
    const candidateExists = votes.find(
      (v) => v.candidateId === selectedCandidate?.id
    );
    if (candidateExists) {
      // update candidates votes
      setVotes(
        votes.map((v) => {
          if (v.candidateId === selectedCandidate?.id) {
            return {
              ...v,
              votes: voteCount ?? 0,
            };
          }
          return v;
        })
      );
    } else {
      // add candidate to votes
      setVotes([
        ...votes,
        {
          candidateId: selectedCandidate?.id || "",
          votes: voteCount ?? 0,
        },
      ]);
    }
    setVoteCount(undefined);
    onClose();
  };
  return (
    <Center>
      <Modal isOpen={show} onClose={onClose} size="lg">
        <ModalContent className="">
          <ModalCloseButton />
          <ModalHeader className="font-bold">Add Votes</ModalHeader>
          <ModalBody>
            <InputField
              placeholder="Enter number of votes"
              // placeholderTextColor={appTheme.light.text.placeholder}
              value={voteCount?.toString()}
              variant="rounded"
              onChangeText={(value) => setVoteCount(Number(value))}
              keyboardType="number-pad"
              allowFontScaling={false}
              testID="phoneInput"
            />
          </ModalBody>
          <ModalFooter>
            <Button className="flex-1" onPress={addVotes}>
              <ButtonText>Add</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AddVotesModal;
