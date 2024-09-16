import { Center, HStack, Image, Modal, VStack } from 'native-base';
import React from 'react'
import { ActivityIndicator, PrimaryButton, appTheme } from '../../../_shared';


export interface UploadModalProps {
    show: boolean;
    onClose: () => void;
    image: string;
    uploadImage: () => void;
    loading: boolean
}
const UploadModal = ({ show, onClose, image, uploadImage, loading }: UploadModalProps) => {
    return (
        <Center>
            <Modal isOpen={show} onClose={onClose} size="lg">
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Upload Image</Modal.Header>
                    <Modal.Body>
                        <Center>
                            <Image
                                source={{ uri: image }}
                                alt="image"
                                size="xl"
                            />
                        </Center>
                    </Modal.Body>
                    <Modal.Footer>
                        <VStack space={2} alignItems="center" w="100%">
                            <PrimaryButton

                                onPress={uploadImage}
                            >
                                <ActivityIndicator renderIf={loading} />
                                <PrimaryButton.Text>Upload</PrimaryButton.Text>
                            </PrimaryButton>
                            <PrimaryButton
                                backgroundColor={appTheme.light.error}
                                onPress={onClose}
                            >
                                <PrimaryButton.Text disabled={loading}>Cancel</PrimaryButton.Text>
                            </PrimaryButton>
                        </VStack>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )

}

export default UploadModal