import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  appName,
  appVersion,
  expoSdk,
  platformLabel,
  reactNativeVersion,
} from '../config';
import { colors, fonts, radius, shadow, spacing } from '../theme';

type CheckRowProps = {
  label: string;
  value: string;
};

function CheckRow({ label, value }: CheckRowProps) {
  return (
    <View style={styles.checkRow}>
      <View style={styles.checkDot}>
        <Text style={styles.checkMark}>✓</Text>
      </View>
      <Text style={styles.checkLabel}>{label}</Text>
      <Text style={styles.checkValue}>{value}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [taps, setTaps] = useState(0);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.lg, paddingBottom: insets.bottom + spacing.xxl },
      ]}
    >
      <Text style={styles.eyebrow}>Hello world</Text>
      <Text style={styles.title}>{appName}</Text>
      <Text style={styles.subtitle}>
        Your first mobile app is running. Next stop: a working to-do list.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardHeading}>Pipeline check</Text>
        <Text style={styles.cardCaption}>
          This app built, bundled and rendered on your device.
        </Text>

        <View style={styles.checkList}>
          <CheckRow label="Running on" value={platformLabel} />
          <CheckRow label="Expo SDK" value={expoSdk} />
          <CheckRow label="React Native" value={reactNativeVersion} />
          <CheckRow label="Version" value={appVersion} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeading}>Touch input</Text>
        <Text style={styles.cardCaption}>
          Tap the button — the counter should climb.
        </Text>

        <Pressable
          onPress={() => setTaps((current) => current + 1)}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          accessibilityRole="button"
          accessibilityLabel="Increment tap counter"
        >
          <Text style={styles.buttonText}>
            {taps === 0 ? 'Tap me' : `Tapped ${taps} ${taps === 1 ? 'time' : 'times'}`}
          </Text>
        </Pressable>

        {taps > 0 && (
          <Text style={styles.buttonHint}>
            Input works. Reset with a reload — shake the device and press R, or hit ⌘R / Ctrl+R.
          </Text>
        )}
      </View>

      <Text style={styles.footer}>
        Edit App.tsx and save — this screen reloads instantly.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.xl,
    gap: spacing.lg,
  },
  eyebrow: {
    fontSize: fonts.caption,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: colors.accent,
  },
  title: {
    fontSize: fonts.title,
    fontWeight: '700',
    color: colors.text,
    marginTop: -spacing.sm,
  },
  subtitle: {
    fontSize: fonts.body,
    lineHeight: 22,
    color: colors.textMuted,
    marginTop: -spacing.sm,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.xs,
    ...shadow,
  },
  cardHeading: {
    fontSize: fonts.heading,
    fontWeight: '600',
    color: colors.text,
  },
  cardCaption: {
    fontSize: fonts.caption,
    color: colors.textMuted,
  },
  checkList: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  checkDot: {
    width: 22,
    height: 22,
    borderRadius: radius.pill,
    backgroundColor: colors.successSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    fontSize: fonts.tiny,
    fontWeight: '700',
    color: colors.success,
  },
  checkLabel: {
    flex: 1,
    fontSize: fonts.caption,
    color: colors.textMuted,
  },
  checkValue: {
    fontSize: fonts.caption,
    fontWeight: '600',
    color: colors.text,
  },
  button: {
    marginTop: spacing.md,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: colors.accentPressed,
  },
  buttonText: {
    fontSize: fonts.body,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonHint: {
    marginTop: spacing.sm,
    fontSize: fonts.tiny,
    color: colors.textMuted,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    fontSize: fonts.tiny,
    color: colors.textMuted,
  },
});
